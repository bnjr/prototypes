import _ from 'lodash'
import {ChatService, ChatsServiceReturn} from './chat.service'
import {
  ChatType,
  Chat as AmplifyChat,
  ChatUsers,
} from '../../models/amplify'
import {ApiServiceImpl} from '../api/api.service.impl'
import {Chat, I18nTextType, MessageI18n, User} from '../../models/local'
import {API, DataStore} from 'aws-amplify'
import * as mutations from '../../graphql/mutations'
import {ServiceTypes} from '../api/api.service'
import {ChatParticipant} from '../../types/chat'
import {ChatServiceResponse} from './chat-service.response'
import {ResponseType} from '../core/service.response'
import {ResponseDetails} from '../core/details.response'
import {ChimeAPI} from './ChimeAPI'

export class ChatServiceImpl extends ApiServiceImpl implements ChatService {
  constructor() {
    super(ServiceTypes.CHAT_SERVICE)
  }
  async addChatParticipant(
    participant: ChatParticipant,
    chat: Chat,
  ): Promise<ChatServiceResponse<Chat, ChatService>> {
    try {
      const chatUsersDetails = {
        chatID: chat.getId(),
        userID: participant.user.getId(),
      }
      const result = (await API.graphql({
        query: mutations.createChatUsers,
        variables: {input: chatUsersDetails},
      })) as {data: ChatUsers}

      return new ChatServiceResponse(
        ResponseType.SUCCESS,
        new ResponseDetails(
          new MessageI18n({[I18nTextType.PLAINTEXT]: 'Chat participant added'}),
        ),
        chat,
      )
    } catch (error) {
      this.logger.error('addChatParticipant', error)
      return new ChatServiceResponse(
        ResponseType.ERROR,
        new ResponseDetails(
          new MessageI18n({
            [I18nTextType.PLAINTEXT]: 'Chat participant could not be added',
          }),
          {location: 'addChatParticipant', params: {participant, chat}},
        ),
        undefined,
      )
    }
  }

  async createChat(
    participants: ChatParticipant[],
    channelArn: string,
    chatType: ChatType,
    name: string,
  ): Promise<ChatServiceResponse<Chat, ChatService>> {
    try {
      const chatDetails = {
        channelArn: channelArn,
        type: chatType,
        name: name,
      }
      const result = (await API.graphql({
        query: mutations.createChat,
        variables: {input: chatDetails},
      })) as {data: {createChat: AmplifyChat}}

      const newChat = result.data.createChat
      const chat = new Chat(newChat, participants)
      participants.map(async (p) => {
        const response = await this.addChatParticipant(p, chat)
      })
      return new ChatServiceResponse(
        ResponseType.SUCCESS,
        new ResponseDetails(
          new MessageI18n({[I18nTextType.PLAINTEXT]: 'Chat created'}),
        ),
        chat,
      )
    } catch (error) {
      this.logger.error('createChat', error)
      return new ChatServiceResponse(
        ResponseType.ERROR,
        new ResponseDetails(
          new MessageI18n({
            [I18nTextType.PLAINTEXT]: 'Chat could not be created',
          }),
          {location: 'createChat', params: {participants}},
        ),
        undefined,
      )
    }
  }

  async getChatsOfParticipant(
    participant: ChatParticipant,
    chatType?: ChatType,
  ): Promise<ChatServiceResponse<Chat[], ChatService>> {
    try {
      const chatUsers = (await DataStore.query(ChatUsers)).filter(
        (cu) => participant.user.getId() === cu.user.id,
      )

      const sortedValues = chatUsers.sort((a, b) =>
        a.chat.id.localeCompare(b.chat.id),
      )

      // Get distinct ChatIDs
      const distinctChats = sortedValues.reduce((a, e) => {
        if (e.chat.type === chatType) a[e.chat.id] = ++a[e.chat.id] || 0
        return a
      }, {})

      const userChats = (await DataStore.query(AmplifyChat)).filter(
        async (c) => {
          if (distinctChats[c.id] >= 0) {
            return true
          }
        },
      )

      // Create Chat object for each ChatID
      const chats: Chat[] = []

      userChats.map(async (c) => {
        const chatUsers = (await DataStore.query(ChatUsers)).filter(
          (cu) => c.id === cu.chat.id,
        )

        let chat: Chat = new Chat(c as AmplifyChat)
        chatUsers.map((cu) => {
          if (cu.chat.id === c.id) {
            const participant: ChatParticipant = {
              user: new User(cu.user),
              arn: ChimeAPI.createMemberArn(cu.user.subId as string),
            }
            chat.addParticipant(participant)
          }
        })
        if (chat) chats.push(chat)
      })

      const returnService: ChatsServiceReturn = {
        response: true,
        object: chats,
      }
      return new ChatServiceResponse(
        ResponseType.SUCCESS,
        new ResponseDetails(
          new MessageI18n({[I18nTextType.PLAINTEXT]: 'Chats retrieved'}),
        ),
        chats,
      )
    } catch (error) {
      this.logger.error('getChatsOfParticipants', error)
      return new ChatServiceResponse(
        ResponseType.ERROR,
        new ResponseDetails(
          new MessageI18n({
            [I18nTextType.PLAINTEXT]: 'Chats could not be retrieved',
          }),
          {location: 'getChatsOfParticipant', params: {participant}},
        ),
        undefined,
      )
    }
  }
}

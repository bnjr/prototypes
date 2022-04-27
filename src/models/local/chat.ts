//! ! ! I M P O R T A N T ! ! !
//Keep it synced with other apps
import {Logger} from 'aws-amplify'
import {
  ChannelName,
  ChannelNameOne2One,
  ChatMessage,
  ChatParticipant,
  IGCMessage,
} from '../../types/chat'
import {ChatType} from '../amplify'
import {Model} from './model'

export class Chat extends Model {
  /**
   * type of the chat
   */
  private _chatType: ChatType
  private _channelArn: string = ''
  private _name: string = ''

  /**
   * Chat participants
   */
  private _participants: ChatParticipant[]

  private _messages: ChatMessage[] = []

  private logger: Logger

  constructor(chat: any, participants?: ChatParticipant[]) {
    super(chat)

    this._chatType = chat.type as ChatType
    this._channelArn = chat.channelArn ? chat.channelArn : ''
    this._name = chat.name ? chat.name : ''
    this._participants = participants ? participants : []
    this.logger = new Logger('Chat')
  }

  private createFromJSON(chatJSON: string): Chat | undefined {
    if (this.isJSONString(chatJSON))
      return Object.setPrototypeOf(JSON.parse(chatJSON), Chat.prototype)
    else return undefined
  }

  JSONFromChat(): string {
    return JSON.stringify(this)
  }

  getGCMessages(): IGCMessage[] {
    if (this.messages) {
      const messages: IGCMessage[] = this.messages.map((message) => {
        const GCMessage = {
          _id: message.MessageId ? message.MessageId : '',
          text: message.Content ? message.Content : '',
          createdAt: message.CreatedTimestamp ? message.CreatedTimestamp : 0,
          user: {
            _id: message.sentBy.user.getId(),
            name: message.sentBy.user.getName(),
            // avatar?: string | number
          },
        }
        return GCMessage
      })
      return messages
    } else return []
  }

  private isJSONString(str: string) {
    try {
      JSON.parse(str)
    } catch (err) {
      this.logger.error(`Error in JSON: ${err}`)
      return false
    }
    return true
  }

  getName = (currentParticipant: ChatParticipant): string => {
    if (this.isJSONString(this.name ? this.name : '')) {
      switch (this.chatType) {
        case ChatType.ONE2_ONE:
          const channelName: ChannelName = JSON.parse(
            this.name,
          ) as ChannelNameOne2One
          // get the other participant
          const nameObj = channelName.participants.find(
            (n) => n.name !== currentParticipant.user.getName(),
          )
          return nameObj?.name || 'Error'
        default:
          return 'Error'
      }
    } else return 'Error'
  }

  set messages(messages) {
    if (messages)
      this._messages = messages.map((m) => {
        const arnArray = m.Sender?.Arn?.split('/')
        if (arnArray) {
          const sentBy = this.participants.find(
            (p) => p.user.getSubId() === arnArray[arnArray.length - 1],
          )
          if (sentBy) {
            m.sentBy = sentBy
          } else {
            throw new Error('Could not set sentBy from message')
          }
        }
        return m
      })
  }

  get channelArn() {
    return this._channelArn
  }

  set channelArn(channelArn: string) {
    this._channelArn = channelArn
  }

  get name() {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  get messages() {
    return this._messages
  }

  get chatType(): ChatType {
    return this._chatType
  }

  set chatType(chatType: ChatType) {
    this._chatType = chatType
  }

  get participants(): ChatParticipant[] {
    return this._participants
  }

  set participants(participants: ChatParticipant[]) {
    this._participants = participants
  }

  addParticipant(participant: ChatParticipant) {
    if (this._participants) this._participants.push(participant)
    else this._participants = [participant]
  }

  isUserIdParticipant(userId: string): boolean {
    if (this.participants) {
      const ownerList = this.participants.filter((participant) => {
        return participant.user.getId() === userId
      })
      return ownerList.length === 0 ? false : true
    } else return false
  }
}

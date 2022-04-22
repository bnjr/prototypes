import {ChatType} from '../../models/amplify'
import {Chat} from '../../models/local'
import {ChatParticipant} from '../../types/chat'
import {ApiService} from '../api/api.service'
import {ChatServiceResponse} from './chat-service.response'

export type ChatServiceReturn = {
  response: boolean
  object: Chat | undefined
  message?: any
}
export type ChatsServiceReturn = {
  response: boolean
  object: Chat[] | undefined
  message?: any
}

export interface ChatService extends ApiService {
  addChatParticipant(
    participant: ChatParticipant,
    chat: Chat,
  ): Promise<ChatServiceResponse<Chat, ChatService>>
  createChat(
    participants: ChatParticipant[],
    channelArn: string,
    chatType: ChatType,
    name: string,
  ): Promise<ChatServiceResponse<Chat, ChatService>>
  getChatsOfParticipant(
    participant: ChatParticipant,
    chatType?: ChatType,
  ): Promise<ChatServiceResponse<Chat[], ChatService>>
}

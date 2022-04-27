import {
  ChannelMessage,
  ChannelMessageSummary,
} from '@aws-sdk/client-chime-sdk-messaging'
import {User} from '../models/local'

export enum ChatType {
  ONE2ONE,
  GROUP,
}

export type ChatParticipant = {
  user: User
  arn: string
}
export interface IGCMessage {
  _id: string | number
  text: string
  createdAt: Date | number
  user: IGCUser
  image?: string
  video?: string
  audio?: string
  system?: boolean
  sent?: boolean
  received?: boolean
  pending?: boolean
  quickReplies?: IGCQuickReplies
}

export interface IGCQuickReplies {
  type: 'radio' | 'checkbox'
  values: IGCReply[]
  keepIt?: boolean
}
export interface IGCUser {
  _id: string | number
  name?: string
  avatar?: string
}
export interface IGCReply {
  title: string
  value: string
  messageId?: any
}

export type ChatMessage =
  | (ChannelMessageSummary & {
      sentBy: ChatParticipant
    })
  | (ChannelMessage & {
      sentBy: ChatParticipant
    })

export interface ChannelNameOne2One {
  participants: {
    name: string
  }[]
}

export interface ChannelNameGroup {
  batch: {name: string}
}

export type ChannelName = ChannelNameOne2One | ChannelNameGroup

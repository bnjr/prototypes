import {List} from '../../utils/list'
import {Chat} from './chat'

export class ChatList extends List<Chat> {
  constructor(rawData?: any) {
    super(rawData, Chat)
  }
}

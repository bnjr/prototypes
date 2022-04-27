import {List} from '../../utils/list'
import {User} from './user'

export class UserList extends List<User> {
  constructor(rawData?: any) {
    super(rawData, User)
  }
}

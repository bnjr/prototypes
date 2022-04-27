import {List} from '../../utils/list'
import {Subscription} from './subscription'

export class SubscriptionList extends List<Subscription> {
  constructor(rawData?: any) {
    super(rawData, Subscription)
  }
}

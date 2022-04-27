import {List} from '../../utils/list'
import {Customer} from './customer'

export class CustomerList extends List<Customer> {
  constructor(rawData?: any) {
    super(rawData, Customer)
  }
}

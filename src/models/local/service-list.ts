import {List} from '../../utils/list'
import {Service} from './service'

export class ServiceList extends List<Service> {
  constructor(rawData?: any) {
    super(rawData, Service)
  }
}

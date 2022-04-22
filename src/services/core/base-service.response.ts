import {ResponseDetails as ResponseDetails} from './details.response'
import {ResponseType} from './service.response'

export class BaseServiceResponse<T, V = undefined> {
  response: ResponseType
  details: ResponseDetails<V>
  data?: T

  constructor(response: ResponseType, details: ResponseDetails<V>, data?: T) {
    this.response = response
    this.data = data
    this.details = details
  }
}

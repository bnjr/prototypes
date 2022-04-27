import {BaseServiceResponse} from '../core/base-service.response'
import {ResponseDetails as ResponseDetails} from '../core/details.response'
import {ResponseType} from '../core/service.response'

/**
 * Every function in service class returns response
 * data is set if data is available otherwise error will be set
 * status contains the status of the operation
 */
export class BPServiceResponse<T, V = undefined> extends BaseServiceResponse<
  T,
  V
> {
  constructor(response: ResponseType, details: ResponseDetails<V>, data?: T) {
    super(response, details, data)
  }
}

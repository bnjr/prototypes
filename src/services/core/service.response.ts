import {ErrorResponse} from './error.response'
import {AxiosError} from 'axios'
export enum ResponseType {
  SUCCESS = 'success',
  INFO = 'info',
  ERROR = 'error',
  ACTION = 'action',
}
/**
 * Every function in service class returns response
 * data is set if data is available otherwise error will be set
 * status contains the status of the operation
 */
export class ServiceResponse<T> {
  data?: T
  error?: ErrorResponse

  constructor(data: T | undefined, error?: AxiosError) {
    this.data = data

    if (error) {
      this.error = new ErrorResponse(error)
    }
  }
}

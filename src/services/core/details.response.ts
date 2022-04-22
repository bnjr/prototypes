import {MessageI18n} from '../../models/local'

type KeyOfType<T> = keyof {
  [P in keyof T as T[P] extends Function ? P : never]: any
}
interface ResponseFrom<T> {
  location?: KeyOfType<T>
  params?: Object
}

export class ResponseDetails<T> {
  private readonly responseMessage: MessageI18n
  responseFrom?: ResponseFrom<T>

  constructor(responseMessage: MessageI18n, responseFrom?: ResponseFrom<T>) {
    // When server doesn't return any error message
    const defaultMessage = {
      plainText: 'Something went wrong. Please try again later!',
    }
    this.responseMessage = responseMessage || defaultMessage
    responseFrom
  }

  getMessage() {
    return this.responseMessage
  }

  getLocation() {
    return this.responseFrom?.location
  }

  getParams() {
    return this.responseFrom?.params
  }
}

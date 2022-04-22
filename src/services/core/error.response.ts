import {AxiosError} from 'axios'
import {BaseResponse} from './base-response'

interface ErrorActionParams {
  url: string
}

interface ErrorAction {
  code: string
  params: ErrorActionParams
}

interface Error {
  param: string
  message: string
  errorAction?: ErrorAction
}

export class ErrorResponse {
  private readonly message: string
  readonly statusCode?: number

  constructor(error: AxiosError<BaseResponse<any>>) {
    // When server doesn't return any error message
    const defaultError = 'Something went wrong. Please try again later!'
    this.message = error.response?.data?.error?.message || defaultError
    this.statusCode = error.response?.status
  }

  getMessage() {
    return this.message
  }
}

import _ from 'lodash'
import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios'
import {Logger} from 'aws-amplify'
import {ApiService} from './api.service'
// import {stores} from '../../stores/stores'
import {RequestHelper} from '../../helpers'
import {BaseResponse} from '../core/base-response'
import {ServiceErrorHandler} from '../core/service-error.handler'
import {ErrorResponse} from '../core/error.response'
import {ServiceResponse} from '../core/service.response'
import {ServiceTypes} from '../api/api.service'

type LogTypes = 'request' | 'response' | 'error'

export class ApiServiceImpl implements ApiService {
  static readonly API_REQUEST_TIMEOUT = 15000
  serviceType: ServiceTypes
  logger: Logger
  /**
   * Any request that fails is first passed to this error handler before returning it to the caller.
   * Error can be modified or certain actions can be taken if required.
   */
  appErrorHandler: ServiceErrorHandler

  static loggerAPI(data: any, type: LogTypes) {
    if (process.env.NODE_ENV !== 'production') {
      const formats = {
        request: {
          title: 'REQUEST',
          background: '#1565C0',
        },
        response: {
          title: 'RESPONSE',
          background: '#43A047',
        },
        error: {
          title: 'ERROR',
          background: '#f44336',
        },
      }

      const endpoint = `${
        data.url
          ? data.url.replace(data.baseUrl, '')
          : data.config.url.replace(data.config.baseURL, '')
      }`
      console.log(
        `%c ${formats[type].title} %c ${endpoint} `,
        `background: ${formats[type].background};color: #fff;padding: 1px 0px;`,
        `color: ${formats[type].background};padding: 1px 0px;`,
        data,
      )
    }
  }

  constructor(serviceType: ServiceTypes) {
    this.serviceType = serviceType
    this.appErrorHandler = new ServiceErrorHandler()
    this.logger = new Logger(serviceType)
  }

  protected static parseErr(response: AxiosResponse): string {
    return _.get(response, 'response.data', '')
  }

  protected setFetching(flag: boolean = true) {
    if (this.serviceType) {
      // stores[this.storeType].setFetching(flag)
    }
  }

  protected setError(e?: any) {
    if (this.serviceType) {
      // stores[this.storeType].setError(
      //   ApiServiceImpl.parseErr(e) || e.toString(),
      // )
    }

    if (process.env.NODE_ENV !== 'production') {
      console.error(e)
    }
  }

  private async getAxiosInstance(customHeaders?: any): Promise<AxiosInstance> {
    const headers: any = {
      Accept: 'application/json',
    }

    // const token = stores.accountStore.getToken()

    // if (token) {
    //   headers.Authorization = `Bearer ${token}`
    // }

    const instance = axios.create({
      // DEV
      baseURL: 'https://jsonplaceholder.typicode.com/',
      timeout: ApiServiceImpl.API_REQUEST_TIMEOUT,
      headers: Object.assign({}, headers, customHeaders),
    })

    instance.interceptors.request.use((request) => {
      this.setFetching()
      this.logger.info(request, 'request')
      return request
    })

    instance.interceptors.response.use(
      (response: AxiosResponse<BaseResponse<any>>) => {
        this.setFetching(false)
        this.logger.info(response, 'response')

        // Remove baseResponse wrapper
        _.set(response, 'data', response.data?.data)

        // response.data = {data: any, error: {message: string}, success: boolean}
        return response
      },
      (error: AxiosError<BaseResponse<any>>) => {
        const errorResponse = new ErrorResponse(error)
        this.setError(errorResponse.getMessage())
        // AlertsHelper.error(errorResponse.getMessage(), {plainText: true})
        this.logger.info(error.response, 'error')

        return Promise.reject(this.appErrorHandler.handleError(error))
      },
    )

    return instance
  }

  protected stripBaseReponse(response: ServiceResponse<any>) {
    // Strip API's base response and return actual data
    return _.set(response, 'data', _.get(response, 'data.data'))
  }

  // protected getUserAccountId(): string | undefined {
  //   const userExists = stores.accountStore.userExists()
  //   if (userExists) {
  //     return stores.accountStore.getUser()?.getId()
  //   }
  // }

  protected queryBuilder(resourceUrl: string): RequestHelper {
    return new RequestHelper(resourceUrl)
  }

  protected async get(url: string, headers?: Object): Promise<AxiosResponse> {
    const api = await this.getAxiosInstance(headers)
    return api.get(url)
  }

  protected async post(
    url: string,
    data: any,
    headers?: Object,
  ): Promise<AxiosResponse> {
    const api = await this.getAxiosInstance(headers)
    return api.post(url, data)
  }

  protected async put(
    url: string,
    data: any,
    headers?: Object,
  ): Promise<AxiosResponse> {
    const api = await this.getAxiosInstance(headers)
    return api.put(url, data)
  }

  protected async patch(
    url: string,
    data: any,
    headers?: Object,
  ): Promise<AxiosResponse> {
    const api = await this.getAxiosInstance(headers)
    return api.patch(url, data)
  }

  protected async delete(
    url: string,
    headers?: Object,
  ): Promise<AxiosResponse> {
    const api = await this.getAxiosInstance(headers)
    return api.delete(url)
  }

  protected notifySuccess(tx: string) {
    // AlertsHelper.success(tx)
  }

  // AWS Amplify services

  // private async makeRequest<T>(
  //   fn: () => Promise<T | undefined>,
  // ): Promise<T | undefined> {
  //   this.setFetching()
  //   const response = await fn()
  //   this.setFetching(false)
  //   return response
  // }

  // protected createRecord<T extends {id: string} & Record<string, any>>(
  //   // eslint-disable-next-line no-undef
  //   entity: new (r: T) => T,
  //   record: T,
  // ): Promise<T> {
  //   return this.makeRequest<T>(
  //     () => DataStore.save(new entity(record)) as Promise<T>,
  //   ) as Promise<T>
  // }

  // protected getRecords<T extends {id: string} & Record<string, any>>(
  //   entity: T,
  // ): Promise<T[]> {
  //   return this.makeRequest(() => DataStore.query(entity))
  // }

  // protected getRecord<T extends {id: string} & Record<string, any>>(
  //   entity: T,
  //   entityId: string,
  // ): Promise<T | undefined> {
  //   return this.makeRequest<T>(() => DataStore.query(entity, entityId))
  // }

  // protected updateRecord<T extends {id: string} & Record<string, any>>(
  //   // eslint-disable-next-line no-undef
  //   entity: T,
  //   record: T,
  //   mutator: (draft: MutableModel<T>) => MutableModel<T>,
  // ): Promise<T | undefined> {
  //   return this.makeRequest<T>(() =>
  //     DataStore.save(entity.copyOf(record, mutator)),
  //   )
  // }

  // protected deleteRecord<T extends Entity>(record: T): Promise<T> {
  //   return this.makeRequest<T>(() => DataStore.delete(record))
  // }
}

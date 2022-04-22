// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
// import 'react-native-get-random-values' //Needed for https://github.com/uuidjs/uuid#getrandomvalues-not-supported
import {v4 as uuid} from 'uuid'
// import AWS from 'aws-sdk'
import {
  LogLevel,
  ConsoleLogger,
  DefaultMessagingSession,
  MessagingSessionConfiguration,
  Message,
  MessagingSessionObserver,
} from 'amazon-chime-sdk-js'

import {Logger} from 'aws-amplify'
import {ChimeAPI} from './ChimeAPI'

class MessagingService {
  private _session: DefaultMessagingSession | undefined = undefined
  private sessionId: string
  private _logger: ConsoleLogger
  private _messageUpdateCallbacks: any[]
  private _endpoint: any = null
  private static _messagingService: MessagingService | undefined = undefined
  private logger
  private chimeAPI: ChimeAPI

  private constructor(chimeAPI: ChimeAPI) {
    this.sessionId = uuid()
    this.chimeAPI = chimeAPI
    this._logger = new ConsoleLogger('CKO Chat', LogLevel.INFO)
    this._messageUpdateCallbacks = []
    this.logger = new Logger('Messaging Service')
  }

  static factory(chimeAPI: ChimeAPI): MessagingService {
    if (this._messagingService) return this._messagingService

    this._messagingService = new MessagingService(chimeAPI)
    return this._messagingService
  }

  messageObserver: MessagingSessionObserver = {
    messagingSessionDidStart: () => {
      this.logger.info('Messaging Connection started!')
    },
    messagingSessionDidStartConnecting: (reconnecting) => {
      this.logger.info('Messaging Connection connecting')
    },
    messagingSessionDidStop: (event) => {
      this.logger.info('Messaging Connection received DidStop event')
    },
    messagingSessionDidReceiveMessage: (message) => {
      this.logger.info('Messaging Connection received message')
      this.publishMessageUpdate(message)
    },
  }

  connect(subId: string) {
    this.setMessagingEndpoint(subId)
    this.logger.info(`Connected`)
  }

  private async setMessagingEndpoint(subId: string) {
    try {
      this.logger.info(`setMessagingEndpoint: starting`)
      const response = await this.chimeAPI.getMessagingSessionEndpoint()
      if (response) {
        this._endpoint = response?.Endpoint?.Url
        try {
          const sessionConfig = new MessagingSessionConfiguration(
            ChimeAPI.createMemberArn(subId),
            this.sessionId,
            this._endpoint,
            this.chimeAPI.chimeMsgClient,
            // new AWS.Chime({region: 'us-east-1'}),
            // AWS,
          )
          this._session = new DefaultMessagingSession(
            sessionConfig,
            this._logger,
          )
          try {
            this._session.addObserver(this.messageObserver)
            try {
              this._session.start()
            } catch (error) {
              this.logger.error('Session Start:', error)
            }
          } catch (error) {
            this.logger.error('Session Add Observer:', error)
          }
        } catch (error) {
          this.logger.error('MessagingSessionConfiguration:', error)
        }
      }
      this.logger.info(`setMessagingEndpoint: ending`)
    } catch (err) {
      this.logger.error('setMessagingEndpoint:', err)
    }
  }

  close() {
    try {
      this._session?.stop()
      this.logger.info(`Closed`)
    } catch (err) {
      console.error('Failed to stop Messaging Session.')
    }
  }

  subscribeToMessageUpdate(callback: (message: Message) => void) {
    this._messageUpdateCallbacks.push(callback)
    this.logger.info('Message listener subscribed!')
  }

  unsubscribeFromMessageUpdate(callback: (message: Message) => void) {
    const index = this._messageUpdateCallbacks.indexOf(callback)
    if (index !== -1) {
      this._messageUpdateCallbacks.splice(index, 1)
    }
    this.logger.info('Message listener unsubscribed!')
  }

  publishMessageUpdate(message: Message) {
    for (let i = 0; i < this._messageUpdateCallbacks.length; i += 1) {
      const callback = this._messageUpdateCallbacks[i]
      callback(message)
    }
    this.logger.log(`Sending message update to listeners!`)
  }
}

export default MessagingService

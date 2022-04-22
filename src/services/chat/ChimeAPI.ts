// import 'react-native-url-polyfill/auto'
// import 'react-native-get-random-values' // needed for crypto
import appConfig from '../../aws-exports'
import {
  ChannelMessagePersistenceType,
  ChannelMode,
  ChannelPrivacy,
  ChimeSDKMessagingClient,
  CreateChannelCommand,
  CreateChannelMembershipCommand,
  CreateChannelMembershipCommandInput,
  DeleteChannelMembershipCommand,
  GetMessagingSessionEndpointCommand,
  GetMessagingSessionEndpointResponse,
  Identity,
  ListChannelMessagesCommand,
  ListChannelMessagesCommandInput,
  SendChannelMessageCommand,
  SendChannelMessageCommandInput,
} from '@aws-sdk/client-chime-sdk-messaging'
// import {ChimeClient, Identity} from '@aws-sdk/client-chime'
// import Chime from 'aws-sdk/clients/chime'
import {Logger} from 'aws-amplify'
import {ICredentials} from '@aws-amplify/core'

/*
 * Chime API
 * used to create, delete, and send messages to a channel
 * refer
 * // https://docs.aws.amazon.com/chime/latest/APIReference/API_Operations_Amazon_Chime_SDK_Messaging.html
 * // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-messaging/index.html
 */
export class ChimeAPI {
  chimeMsgClient: ChimeSDKMessagingClient
  // chimeClient: ChimeClient
  // chimeSDKClient: Chime
  private logger: Logger
  private static instance: ChimeAPI

  private constructor(credentials: ICredentials) {
    this.chimeMsgClient = new ChimeSDKMessagingClient({
      region: 'us-east-1',
      credentials: credentials,
    })
    // this.chimeClient = new ChimeClient({region: 'us-east-1'})
    // this.chimeSDKClient = new Chime({region: 'us-east-1'})
    this.logger = new Logger('Chime Api')
  }

  static factory(credentials: ICredentials) {
    if (!ChimeAPI.instance) {
      ChimeAPI.instance = new ChimeAPI(credentials)
    }
    return ChimeAPI.instance
  }

  static createMemberArn(subId: string): string {
    return `${appConfig.appInstanceArn}/user/${subId}`
  }

  async getMessagingSessionEndpoint(): Promise<GetMessagingSessionEndpointResponse> {
    try {
      this.logger.info(`getMessagingSessionEndpoint start`)
      // const request = this.chimeSDK.getMessagingSessionEndpoint()
      // const response = await request.promise()
      const command = new GetMessagingSessionEndpointCommand({})
      const response = await this.chimeMsgClient.send(command)
      this.logger.info(`getMessagingSessionEndpoint end`)
      return response
    } catch (error) {
      this.logger.error(`getMessagingSessionEndpoint(${error})`)
      throw error
    }
  }

  /**`
   * Function to send channel message
   * @param {channelArn} string Channel Arn
   * @param {messageContent} string Message content
   * @param {member} string Chime channel member
   * @param {options{}} object Additional attributes for the request object.
   * @returns {object} sendMessage object;
   */
  async sendChannelMessage(
    channelArn: string,
    messageContent: string,
    persistence: ChannelMessagePersistenceType,
    member: {subId: string; userId: string},
    options?: {Metadata: string},
  ) {
    try {
      this.logger.info('sendChannelMessage start')

      const input: SendChannelMessageCommandInput = {
        ChimeBearer: ChimeAPI.createMemberArn(member.subId),
        ChannelArn: channelArn,
        Content: messageContent,
        Persistence: persistence, // Allowed types are PERSISTENT and NON_PERSISTENT
        Type: 'STANDARD', // Allowed types are STANDARD and CONTROL
      }
      if (options && options.Metadata) {
        input.Metadata = options.Metadata
      }
      const command = new SendChannelMessageCommand(input)
      const response = await this.chimeMsgClient.send(command)

      const sentMessage = {
        response: response,
        CreatedTimestamp: new Date(),
        Sender: {
          Arn: ChimeAPI.createMemberArn(member.subId),
          Name: member.userId,
        },
      }
      this.logger.info('sendChannelMessage end')

      return sentMessage
    } catch (error) {
      this.logger.error(`sendChannelMessage(${error})`)
      throw error
    }
  }

  async listChannelMessages(
    channelArn: string,
    subId: string,
    nextToken = undefined,
  ) {
    try {
      this.logger.info('listChannelMessages start')
      const input: ListChannelMessagesCommandInput = {
        ChimeBearer: ChimeAPI.createMemberArn(subId),
        ChannelArn: channelArn,
        NextToken: nextToken,
      }
      const command = new ListChannelMessagesCommand(input)
      const response = await this.chimeMsgClient.send(command)
      this.logger.info('listChannelMessages end')

      return {
        Messages: response.ChannelMessages,
        NextToken: response.NextToken,
      }
    } catch (error) {
      this.logger.error(`listChannelMessages(${error})`)
      throw error
    }
  }

  async createChannelMembership(
    channelArn: string,
    memberArn: string,
    subId: string,
  ): Promise<Identity | undefined> {
    try {
      this.logger.info('createChannelMembership start')
      const input: CreateChannelMembershipCommandInput = {
        ChimeBearer: ChimeAPI.createMemberArn(subId),
        ChannelArn: channelArn,
        MemberArn: memberArn,
        Type: 'DEFAULT', // OPTIONS ARE: DEFAULT and HIDDEN
      }
      this.logger.warn({input})
      const command = new CreateChannelMembershipCommand(input)
      const response = await this.chimeMsgClient.send(command)
      this.logger.info('createChannelMembership end')

      return response.Member
    } catch (error) {
      this.logger.error(`createChannelMembership(${error})`)
      throw error
    }
  }

  async deleteChannelMembership(
    channelArn: string,
    memberArn: string,
    subId: string,
  ) {
    try {
      this.logger.info('deleteChannelMembership start')
      const input = {
        ChimeBearer: ChimeAPI.createMemberArn(subId),
        ChannelArn: channelArn,
        MemberArn: memberArn,
      }
      const command = new DeleteChannelMembershipCommand(input)
      const response = await this.chimeMsgClient.send(command)
      this.logger.info('deleteChannelMembership end')

      return response
    } catch (error) {
      this.logger.error(`deleteChannelMembership(${error})`)
      throw error
    }
  }

  async createChannel(
    name: string,
    mode: ChannelMode,
    privacy: ChannelPrivacy,
    subId: string,
    metadata?: string,
  ) {
    try {
      this.logger.info('createChannel start')
      const input = {
        ChimeBearer: ChimeAPI.createMemberArn(subId),
        AppInstanceArn: appConfig.appInstanceArn,
        Metadata: metadata,
        Name: name,
        Mode: mode,
        Privacy: privacy,
      }
      const command = new CreateChannelCommand(input)
      this.logger.warn({command})
      const response = await this.chimeMsgClient.send(command)
      this.logger.warn({response})
      this.logger.info('createChannel end')

      return response.ChannelArn
    } catch (error) {
      this.logger.error({error})
      throw error
    }
  }
}

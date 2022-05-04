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
  DeleteChannelCommand,
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput,
  DeleteChannelMembershipCommand,
  DescribeChannelCommand,
  DescribeChannelCommandInput,
  DescribeChannelCommandOutput,
  GetMessagingSessionEndpointCommand,
  GetMessagingSessionEndpointResponse,
  Identity,
  ListChannelMembershipsCommand,
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsForAppInstanceUserCommand,
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
  ListChannelMessagesCommand,
  ListChannelMessagesCommandInput,
  SendChannelMessageCommand,
  SendChannelMessageCommandInput,
} from '@aws-sdk/client-chime-sdk-messaging'
import {Auth, Logger} from 'aws-amplify'
import {ICredentials} from '@aws-amplify/core'
import {
  ChimeSDKIdentityClient,
  DeleteAppInstanceUserCommand,
  DeleteAppInstanceUserCommandInput,
  DeleteAppInstanceUserCommandOutput,
} from '@aws-sdk/client-chime-sdk-identity'

/*
 * Chime API
 * used to create, delete, and send messages to a channel
 * refer
 * // https://docs.aws.amazon.com/chime/latest/APIReference/API_Operations_Amazon_Chime_SDK_Messaging.html
 * // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-chime-sdk-messaging/index.html
 */
export class ChimeAPI {
  chimeMsgClient: ChimeSDKMessagingClient
  chimeIdentityClient: ChimeSDKIdentityClient
  private logger: Logger
  private static instance: ChimeAPI

  private constructor(credentials: ICredentials) {
    this.chimeMsgClient = new ChimeSDKMessagingClient({
      region: 'us-east-1',
      credentials: credentials,
    })
    this.chimeIdentityClient = new ChimeSDKIdentityClient({
      region: 'us-east-1',
      credentials: credentials,
    })
    this.logger = new Logger('Chime Api')
  }

  static factory(credentials: ICredentials) {
    if (!ChimeAPI.instance) {
      ChimeAPI.instance = new ChimeAPI(credentials)
    }
    return ChimeAPI.instance
  }

  static createMemberArn(userId: string): string {
    return `${appConfig.appInstanceArn}/user/${userId}`
  }

  async needRefresh() {
    const session = await Auth.currentSession()
    const refresh_token = session.getRefreshToken() // receive session from calling cognitoUser.getSession()
    const credentials = this.chimeMsgClient.config.credentials()
  }

  async getMessagingSessionEndpoint(): Promise<GetMessagingSessionEndpointResponse> {
    try {
      this.logger.info(`getMessagingSessionEndpoint start`)
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
        ChimeBearer: ChimeAPI.createMemberArn(member.userId),
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
          Arn: ChimeAPI.createMemberArn(member.userId),
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
    userId: string,
    nextToken: string | undefined = undefined,
  ) {
    try {
      this.logger.info('listChannelMessages start')
      const input: ListChannelMessagesCommandInput = {
        ChimeBearer: ChimeAPI.createMemberArn(userId),
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
    userId: string,
  ): Promise<Identity | undefined> {
    try {
      this.logger.info('createChannelMembership start')
      const input: CreateChannelMembershipCommandInput = {
        ChimeBearer: ChimeAPI.createMemberArn(userId),
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
    userId: string,
  ) {
    try {
      this.logger.info('deleteChannelMembership start')
      const input = {
        ChimeBearer: ChimeAPI.createMemberArn(userId),
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
    userId: string,
    metadata?: string,
  ) {
    try {
      this.logger.info('createChannel start')
      const input = {
        ChimeBearer: ChimeAPI.createMemberArn(userId),
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

  async listChannelMembershipsForAppInstanceUser(userId: string) {
    this.logger.info('listChannelMembershipsForAppInstanceUser start')
    const input: ListChannelMembershipsForAppInstanceUserCommandInput = {
      ChimeBearer: ChimeAPI.createMemberArn(userId),
    }
    const command = new ListChannelMembershipsForAppInstanceUserCommand(input)
    const response = await this.chimeMsgClient.send(command)
    const channels = response.ChannelMemberships
    return channels
  }

  async listChannelMemberships(channelArn: string, userId: string) {
    this.logger.info('listChannelMemberships start')
    const input: ListChannelMembershipsCommandInput = {
      ChimeBearer: ChimeAPI.createMemberArn(userId),
      ChannelArn: channelArn,
    }
    const command = new ListChannelMembershipsCommand(input)
    const response = await this.chimeMsgClient.send(command)

    console.log(`listChannelMemberships(end)`)

    return response.ChannelMemberships
  }
  
  async deleteChannel(
    channelArn: string,
    userId: string,
  ): Promise<DeleteChannelCommandOutput> {
    try {
      const input: DeleteChannelCommandInput = {
        ChimeBearer: ChimeAPI.createMemberArn(userId),
        ChannelArn: channelArn,
      }
      const command = new DeleteChannelCommand(input)
      const response = await this.chimeMsgClient.send(command)
      return response
    } catch (error) {
      this.logger.error({error})
      throw error
    }
  }

  async listChannels(
    userId: string,
  ): Promise<ListChannelMembershipsForAppInstanceUserCommandOutput> {
    try {
      const input: ListChannelMembershipsForAppInstanceUserCommandInput = {
        ChimeBearer: ChimeAPI.createMemberArn(userId),
      }
      const command = new ListChannelMembershipsForAppInstanceUserCommand(input)
      const response = await this.chimeMsgClient.send(command)
      return response
    } catch (error) {
      this.logger.error({error})
      throw error
    }
  }

  async describeChannel(
    channelArn: string,
    userId: string,
  ): Promise<DescribeChannelCommandOutput> {
    try {
      const input: DescribeChannelCommandInput = {
        ChannelArn: channelArn,
        ChimeBearer: ChimeAPI.createMemberArn(userId),
      }
      const command = new DescribeChannelCommand(input)
      const response = await this.chimeMsgClient.send(command)
      return response
    } catch (error) {
      this.logger.error({error})
      throw error
    }
  }

  async deleteAppUserInstance(
    userId: string,
  ): Promise<DeleteAppInstanceUserCommandOutput> {
    try {
      const input: DeleteAppInstanceUserCommandInput = {
        AppInstanceUserArn: ChimeAPI.createMemberArn(userId),
      }
      const command = new DeleteAppInstanceUserCommand(input)
      const response = await this.chimeIdentityClient.send(command)
      return response
    } catch (error) {
      this.logger.error({error})
      throw error
    }
  }
}
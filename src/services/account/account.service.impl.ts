import {AccountServiceResponse} from './account-service.response'
import {ResponseDetails} from '../core/details.response'
import {AccountService} from './account.service'
import {User as LocalUser, MessageI18n, I18nTextType} from '../../models/local'
import {Profile, User} from '../../models/amplify'
import {DataStore} from '@aws-amplify/datastore'
import {Auth} from '@aws-amplify/auth'
import {
  CognitoIdentityProviderClient,
  ListUsersCommand,
  ListUsersCommandInput,
} from '@aws-sdk/client-cognito-identity-provider'
import {ApiServiceImpl} from '../api/api.service.impl'
import {ServiceTypes} from '../api/api.service'
import {ResponseType} from '../core/service.response'

export class AccountServiceImpl
  extends ApiServiceImpl
  implements AccountService
{
  constructor(serviceType?: ServiceTypes) {
    super(serviceType ? serviceType : ServiceTypes.ACCOUNT_SERVICE)
  }

  async getUsers(
    identityClient: CognitoIdentityProviderClient,
    userPoolId: string,
    limit = 60,
  ): Promise<AccountServiceResponse<any, AccountServiceImpl>> {
    try {
      const input: ListUsersCommandInput = {
        Limit: limit,
        UserPoolId: userPoolId,
      }
      const command = new ListUsersCommand(input)
      const response = await identityClient.send(command)
      this.logger.info(`IdentityService::getUsers: ${JSON.stringify(response)}`)
      return new AccountServiceResponse(
        ResponseType.INFO,
        new ResponseDetails(
          new MessageI18n({[I18nTextType.PLAINTEXT]: 'Retrieved user'}),
          {
            location: 'getUsers',
          },
        ),
        response.Users,
      )
    } catch (err) {
      this.logger.error('Could not get user: ', err)
      return new AccountServiceResponse(
        ResponseType.ERROR,
        new ResponseDetails(
          new MessageI18n({[I18nTextType.PLAINTEXT]: 'Could not get user'}),
          {
            location: 'getUsers',
          },
        ),
        undefined,
      )
    }
  }

  async searchByName(
    // identityClient: CognitoIdentityServiceProvider,
    identityClient: CognitoIdentityProviderClient,
    userPoolId: string,
    name: string,
  ): Promise<AccountServiceResponse<any, AccountServiceImpl>> {
    try {
      const input: ListUsersCommandInput = {
        Filter: `username = "${name}"`,
        Limit: 10,
        UserPoolId: userPoolId,
      }
      const command = new ListUsersCommand(input)
      const response = await identityClient.send(command)
      this.logger.info(`IdentityService::searchByName`) //: ${JSON.stringify(list)}`)

      return new AccountServiceResponse(
        ResponseType.INFO,
        new ResponseDetails(
          new MessageI18n({[I18nTextType.PLAINTEXT]: 'Found user'}),
          {
            location: 'searchByName',
          },
        ),
        response.Users,
      )
    } catch (err) {
      this.logger.error('Could not search user: ', err)
      return new AccountServiceResponse(
        ResponseType.ERROR,
        new ResponseDetails(
          new MessageI18n({[I18nTextType.PLAINTEXT]: 'Could not search user'}),
          {
            location: 'searchByName',
          },
        ),
        undefined,
      )
    }
  }

  async fetchCurrentUser(): Promise<
    AccountServiceResponse<LocalUser | undefined, AccountService>
  > {
    try {
      const response = await Auth.currentAuthenticatedUser()
      const currentUser = (await DataStore.query(
        User,
        response.username,
      )) as User

      const user = new LocalUser({
        ...currentUser,
        phoneNumber: currentUser.phone,
        // subId: response.attributes.sub,
      })
      const result = new AccountServiceResponse<LocalUser>(
        ResponseType.SUCCESS,
        new ResponseDetails(
          new MessageI18n({
            [I18nTextType.TEXT_CODE]: 'alertMessages.loginSuccess',
          }),
        ),
        user,
      )
      return result
    } catch (e) {
      this.logger.error('fetchCurrentuser:', e)
      const errorDetails = new ResponseDetails<AccountService>(
        new MessageI18n({[I18nTextType.PLAINTEXT]: (e as Error).message}),
        {location: 'fetchCurrentUser'},
      )
      const result = new AccountServiceResponse(
        ResponseType.ERROR,
        errorDetails,
        undefined,
      )
      return result
    }
  }

  async getUserByPhoneOrEmail(username: string): Promise<User | undefined> {
    try {
      const users = await DataStore.query(User, (c) =>
        c.or((c) => c.phone('eq', `+91${username}`).email('eq', username)),
      )
      if (users.length === 0) {
        return undefined
      } else {
        return users[0]
      }
    } catch (e) {
      this.logger.error('getUserByPhone:', e)
      return undefined
    }
  }

  async getUserFromEmail(email: string): Promise<User | undefined> {
    try {
      const users = (await DataStore.query(User)).filter(
        (user) => user.email === email,
      )
      const user = users[0]
      return user
    } catch (error) {
      this.logger.error('getUserFromEmail:', error)
      return undefined
    }
  }

  async getUserFromPhone(phone: string): Promise<User | undefined> {
    this.logger.debug('getUserFromPhone: phone:', phone)
    try {
      const users = (await DataStore.query(User)).filter(
        (user) => user.phone === phone,
      )
      const user = users[0]
      return user
    } catch (error) {
      this.logger.error('getUserFromPhone:', error)
      return undefined
    }
  }

  async getUserFromId(
    userId: string,
  ): Promise<AccountServiceResponse<LocalUser | undefined, AccountServiceImpl>> {
    try {
      const user = await DataStore.query(User, userId)
      if (user) {
        const responseDetails = new ResponseDetails(
          new MessageI18n({[I18nTextType.PLAINTEXT]: 'User found'}),
        )
        const responseResult = new AccountServiceResponse(
          ResponseType.SUCCESS,
          responseDetails,
          new LocalUser(user),
        )
        return responseResult
      } else {
        const responseDetails = new ResponseDetails<AccountServiceImpl>(
          new MessageI18n({[I18nTextType.PLAINTEXT]: 'User not found'}),
          {location: 'getUserFromId', params: {userId}},
        )
        const responseResult = new AccountServiceResponse(
          ResponseType.ERROR,
          responseDetails,
          undefined,
        )
        return responseResult
      }
    } catch (error) {
      this.logger.error('Error getting user from Id:', error)
      const responseDetails = new ResponseDetails<AccountServiceImpl>(
        new MessageI18n({[I18nTextType.PLAINTEXT]: (error as Error).message}),
        {location: 'getUserFromId', params: {userId}},
      )
      const responseResult = new AccountServiceResponse(
        ResponseType.ERROR,
        responseDetails,
        undefined,
      )
      return responseResult
    }
  }

  async signUp(
    user: LocalUser,
    password: string,
    withoutContactInfo: boolean = false,
  ): Promise<
    AccountServiceResponse<LocalUser | undefined, AccountServiceImpl>
  > {
    try {
      const userDB =
        user.getEmail() && user.getEmail() !== ''
          ? await this.getUserFromEmail(user.getEmail())
          : user.getPhone() && user.getPhone() !== ''
          ? await this.getUserFromPhone(user.getPhone())
          : undefined
      if (userDB) {
        return new AccountServiceResponse(
          ResponseType.ERROR,
          new ResponseDetails<AccountServiceImpl>(
            new MessageI18n({
              [I18nTextType.TEXT_CODE]: 'alertMessages.phoneAlreadyExists',
            }),
            {location: 'signUp', params: {user}},
          ),
          undefined,
        )
      } else {
        // Create user in DB
        let newUserData: User = new User({
          profile: user.profile,
          isActive: false,
        })

        if (user.getEmail() !== '') {
          newUserData = new User({
            profile: user.profile,
            email: user.getEmail(),
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            isActive: false,
          })
        }
        if (user.getPhone() !== '') {
          newUserData = new User({
            profile: user.profile,
            phone: user.getPhone(),
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            isActive: false,
          })
        }
        if (user.getPhone() !== '' && user.getEmail() !== '') {
          newUserData = new User({
            profile: user.profile,
            phone: user.getPhone(),
            email: user.getEmail(),
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            isActive: false,
          })
        }
        const newUser = await DataStore.save(newUserData)

        // Create user in Cognito
        const authResponse = await Auth.signUp({
          username: newUser.id,
          password: password,
          attributes: {
            phone_number: withoutContactInfo ? '' : user.getPhone(),
            email: withoutContactInfo ? '' : user.getEmail(),
            'custom:profile_1': user.profile[0],
          },
          validationData: [], //optional
        })
        this.logger.debug('signUp: reponse', authResponse)
        return new AccountServiceResponse(
          ResponseType.SUCCESS,
          new ResponseDetails(
            new MessageI18n({[I18nTextType.PLAINTEXT]: 'Signup successfull'}),
          ),
          new LocalUser(newUser),
        )
      }
    } catch (e) {
      this.logger.error('signUp:', e)
      return new AccountServiceResponse(
        ResponseType.ERROR,
        new ResponseDetails(
          new MessageI18n({
            [I18nTextType.PLAINTEXT]: 'Signup error has occured',
          }),
          {location: 'signUp', params: {user}},
        ),
        undefined,
      )
    }
  }

  async confirmSignUp(
    phone: string,
    code: string,
    password: string,
  ): Promise<AccountServiceResponse<LocalUser | undefined, AccountService>> {
    try {
      const originalUser = await this.getUserFromPhone(phone)
      if (originalUser) {
        const response = await Auth.confirmSignUp(originalUser.id, code)
        this.logger.info('confirmSignUp: Response', response)
        if (response) {
          const updatedUser = await DataStore.save(
            User.copyOf(originalUser, (updated) => {
              updated.isPhoneVerified = true
            }),
          )
          await Auth.signIn(originalUser.id, password) //This will load store
          return new AccountServiceResponse(
            ResponseType.SUCCESS,
            new ResponseDetails(
              new MessageI18n({[I18nTextType.PLAINTEXT]: 'Signup confirmed'}),
            ),
            new LocalUser(updatedUser),
          )
        } else {
          return new AccountServiceResponse(
            ResponseType.ERROR,
            new ResponseDetails(
              new MessageI18n({
                [I18nTextType.PLAINTEXT]: 'Signup confirmation errored',
              }),
            ),
          )
        }
      } else {
        return new AccountServiceResponse(
          ResponseType.ERROR,
          new ResponseDetails(
            new MessageI18n({
              [I18nTextType.PLAINTEXT]: 'Signup confirmation errored',
            }),
            {location: 'confirmSignUp', params: {phone}},
          ),
        )
      }
    } catch (e) {
      this.logger.error(e)
      return new AccountServiceResponse(
        ResponseType.ERROR,
        new ResponseDetails(
          new MessageI18n({
            [I18nTextType.PLAINTEXT]: 'Signup confirmation errored',
          }),
          {location: 'confirmSignUp', params: {phone}},
        ),
      )
    }
  }

  async login(
    username: string,
    password: string,
  ): Promise<AccountServiceResponse<string | undefined, AccountServiceImpl>> {
    try {
      const loginResponse = await Auth.signIn(
        username ? username : 'unknown',
        password,
      )
      const responseDetails = new ResponseDetails<AccountServiceImpl>(
        new MessageI18n({
          [I18nTextType.TEXT_CODE]: 'alertMessages.loginSuccess',
        }),
        {location: 'login'},
      )
      const result = new AccountServiceResponse(
        ResponseType.SUCCESS,
        responseDetails,
        username,
      )
      return result
    } catch (e) {
      this.logger.error('Login: ', e)
      const responseDetails = new ResponseDetails<AccountServiceImpl>(
        new MessageI18n({[I18nTextType.PLAINTEXT]: (e as Error).message}),
        {location: 'login', params: {username}},
      )
      const result = new AccountServiceResponse(
        ResponseType.ERROR,
        responseDetails,
        username,
      )
      return result
    }
  }

  async requestEmailOtp(
    currentUser: LocalUser,
    email: string,
  ): Promise<AccountServiceResponse<LocalUser | undefined, AccountService>> {
    try {
      if (currentUser.getEmail() === email) {
        const responseDetails = new ResponseDetails<AccountService>(
          new MessageI18n({[I18nTextType.PLAINTEXT]: 'Email already exists'}),
          {
            location: 'requestEmailOtp',
            params: {email},
          },
        )
        const serviceResponse = new AccountServiceResponse(
          ResponseType.ACTION,
          responseDetails,
          currentUser,
        )
        return serviceResponse
      } else {
        const user = await Auth.currentAuthenticatedUser()
        const responseUpdate = await Auth.updateUserAttributes(user, {
          email,
        })
        const responseVerify = await Auth.verifyCurrentUserAttribute('email')

        if (
          responseUpdate === 'SUCCESS' &&
          (responseVerify as unknown as string) === 'SUCCESS'
        ) {
          // Can use Datastore as login would have initiated before this
          const originalUser = await DataStore.query(User, user.username)
          // const originalUser = await this.getUserByPhone(currentUser.getPhone())
          if (originalUser) {
            const updatedUser = await DataStore.save(
              User.copyOf(originalUser, (updated) => {
                updated.email = email
              }),
            )
            const reponseDetails = new ResponseDetails(
              new MessageI18n({
                [I18nTextType.PLAINTEXT]: 'Email Added',
              }),
            )
            const serviceResponse = new AccountServiceResponse(
              ResponseType.SUCCESS,
              reponseDetails,
              new LocalUser(updatedUser),
            )
            return serviceResponse
          } else {
            const errorDetails = new ResponseDetails<AccountService>(
              new MessageI18n({[I18nTextType.PLAINTEXT]: 'User not found'}),
              {
                location: 'requestEmailOtp',
                params: {email},
              },
            )
            const serviceResponse = new AccountServiceResponse(
              ResponseType.ERROR,
              errorDetails,
              currentUser,
            )
            return serviceResponse
          }
        } //else error
        else {
          const errorDetails = new ResponseDetails<AccountService>(
            new MessageI18n({
              [I18nTextType.PLAINTEXT]: 'Email could not be updated',
            }),
            {
              location: 'requestEmailOtp',
              params: {email},
            },
          )
          const serviceResponse = new AccountServiceResponse(
            ResponseType.ERROR,
            errorDetails,
            currentUser,
          )
          return serviceResponse
        }
      }
    } catch (e) {
      this.logger.error(e)
      const responseDetails = new ResponseDetails<AccountService>(
        new MessageI18n({[I18nTextType.PLAINTEXT]: (e as Error).message}),
        {
          location: 'requestEmailOtp',
          params: {email},
        },
      )
      const serviceResponse = new AccountServiceResponse(
        ResponseType.ERROR,
        responseDetails,
        currentUser,
      )
      return serviceResponse
    }
  }

  async requestPhoneOtp(
    currentUser: LocalUser,
    phone: string,
  ): Promise<AccountServiceResponse<LocalUser | undefined, AccountService>> {
    try {
      if (currentUser.getPhone().length > 0) {
        const errorDetails = new ResponseDetails<AccountService>(
          new MessageI18n({[I18nTextType.PLAINTEXT]: 'Phone already exists'}),
          {
            location: 'requestPhoneOtp',
            params: {currentUser, phone},
          },
        )
        const result = new AccountServiceResponse(
          ResponseType.ACTION,
          errorDetails,
          currentUser,
        )
        return result
      } else {
        const user = await Auth.currentAuthenticatedUser()
        const response = await Auth.updateUserAttributes(user, {
          phone_number: phone,
        })
        if (response === 'SUCCESS') {
          const original = await DataStore.query(User, user.username)
          if (original) {
            const updateResponse = await DataStore.save(
              User.copyOf(original, (updated) => {
                updated.phone = phone
              }),
            )
            const responseDetails = new ResponseDetails(
              new MessageI18n({
                [I18nTextType.PLAINTEXT]: 'Phone OTP requested',
              }),
            )
            const result = new AccountServiceResponse(
              ResponseType.SUCCESS,
              responseDetails,
              new LocalUser(updateResponse),
            )
            return result
          }
        }
        const errorDetails = new ResponseDetails<AccountService>(
          new MessageI18n({
            [I18nTextType.PLAINTEXT]:
              'Something went wrong in requesting phone OTP',
          }),
          {
            location: 'requestPhoneOtp',
            params: {phone},
          },
        )
        const result = new AccountServiceResponse(
          ResponseType.ERROR,
          errorDetails,
          currentUser,
        )
        return result
      }
    } catch (e) {
      this.logger.error(e)
      const errorDetails = new ResponseDetails<AccountService>(
        new MessageI18n({
          [I18nTextType.PLAINTEXT]:
            'Something went wrong in requesting phone OTP',
        }),
        {
          location: 'requestPhoneOtp',
          params: {phone},
        },
      )
      const result = new AccountServiceResponse(
        ResponseType.ERROR,
        errorDetails,
        currentUser,
      )
      return result
    }
  }

  async verifyPhoneOtp(
    code: string,
  ): Promise<AccountServiceResponse<LocalUser | undefined, AccountService>> {
    try {
      const user = await Auth.currentAuthenticatedUser()
      const response = await Auth.verifyCurrentUserAttributeSubmit(
        'phone_number',
        code,
      )
      if (response === 'SUCCESS') {
        const original = await DataStore.query(User, user.username)
        if (original) {
          const updateResponse = await DataStore.save(
            User.copyOf(original, (updated) => {
              updated.isPhoneVerified = true
            }),
          )
          const responseDetails = new ResponseDetails(
            new MessageI18n({
              [I18nTextType.TEXT_CODE]: 'alertMessages.phoneUpdated',
            }),
            undefined,
          )
          const result = new AccountServiceResponse(
            ResponseType.SUCCESS,
            responseDetails,
            new LocalUser(updateResponse),
          )
          return result
        }
      }
      const errorDetails = new ResponseDetails<AccountService>(
        new MessageI18n({
          [I18nTextType.PLAINTEXT]:
            'Something went wrong in verifying phone OTP',
        }),
        {
          location: 'verifyPhoneOtp',
        },
      )
      const result = new AccountServiceResponse(
        ResponseType.ERROR,
        errorDetails,
        undefined,
      )
      return result
    } catch (e) {
      const user = await Auth.currentAuthenticatedUser()
      const original = await DataStore.query(User, user.username)
      if (original) {
        const updateResponse = await DataStore.save(
          User.copyOf(original, (updated) => {
            updated.isPhoneVerified = false
          }),
        )
        const responseDetails = new ResponseDetails(
          new MessageI18n({
            [I18nTextType.TEXT_CODE]: 'alertMessages.phoneUpdated',
          }),
        )
        const result = new AccountServiceResponse(
          ResponseType.SUCCESS,
          responseDetails,
          new LocalUser(updateResponse),
        )
        return result
      }
      this.logger.error(e)
      const errorDetails = new ResponseDetails<AccountService>(
        new MessageI18n({
          [I18nTextType.PLAINTEXT]:
            'Something went wrong in verifying phone OTP',
        }),
        {
          location: 'verifyPhoneOtp',
        },
      )
      const result = new AccountServiceResponse(
        ResponseType.ERROR,
        errorDetails,
        undefined,
      )
      return result
    }
  }

  async verifyEmailOtp(
    currentUser: LocalUser,
    code: string,
  ): Promise<AccountServiceResponse<LocalUser | undefined, AccountService>> {
    try {
      const response = await Auth.verifyCurrentUserAttributeSubmit(
        'email',
        code,
      )
      if (response === 'SUCCESS') {
        // Can use Datastore as login would have initiated before this
        const originalUser = await DataStore.query(User, currentUser.getId())
        if (originalUser) {
          const updatedUser = await DataStore.save(
            User.copyOf(originalUser, (updated) => {
              updated.isEmailVerified = true
            }),
          )
          const responseDetails = new ResponseDetails(
            new MessageI18n({
              [I18nTextType.TEXT_CODE]: 'alertMessages.emailUpdated',
            }),
          )
          const serviceResponse = new AccountServiceResponse(
            ResponseType.SUCCESS,
            responseDetails,
            new LocalUser(updatedUser),
          )
          return serviceResponse
        } else {
          const errorDetails = new ResponseDetails<AccountService>(
            new MessageI18n({[I18nTextType.PLAINTEXT]: 'User not found'}),
            {
              location: 'verifyEmailOtp',
              params: {currentUser},
            },
          )
          const result = new AccountServiceResponse(
            ResponseType.ERROR,
            errorDetails,
            undefined,
          )
          return result
        }
      } else {
        const errorDetails = new ResponseDetails<AccountService>(
          new MessageI18n({
            [I18nTextType.PLAINTEXT]: 'Email attribute could not be set',
          }),
          {
            location: 'verifyEmailOtp',
            params: {currentUser},
          },
        )
        const result = new AccountServiceResponse(
          ResponseType.ERROR,
          errorDetails,
          undefined,
        )
        return result
      }
    } catch (e) {
      const user = await Auth.currentAuthenticatedUser()
      const originalUser = await DataStore.query(User, user.username)

      if (originalUser) {
        const updatedUser = await DataStore.save(
          User.copyOf(originalUser, (updated) => {
            updated.isEmailVerified = false
          }),
        )
        const responseDetails = new ResponseDetails<AccountService>(
          new MessageI18n({
            [I18nTextType.PLAINTEXT]: 'Email attribute could not be set',
          }),
          {location: 'verifyEmailOtp', params: {currentUser}},
        )
        const serviceResponse = new AccountServiceResponse(
          ResponseType.ERROR,
          responseDetails,
          new LocalUser(updatedUser),
        )
        return serviceResponse
      }
      this.logger.error(e)
      const errorDetails = new ResponseDetails<AccountService>(
        new MessageI18n({[I18nTextType.PLAINTEXT]: (e as Error).message}),
        {location: 'verifyEmailOtp', params: {currentUser}},
      )
      const result = new AccountServiceResponse(
        ResponseType.ERROR,
        errorDetails,
        undefined,
      )
      return result
    }
  }

  async resendEmailVerificationCode() {
    try {
      const response = await Auth.verifyCurrentUserAttribute('email')
      return {
        error: null,
        data: 'alertMessages.otpResentSuccessfully',
      }
    } catch (e) {
      this.logger.error(e)
      return {
        error: (e as Error).message ?? 'Something went wrong',
        data: 'Something went wrong',
      }
    }
  }

  async resendPhoneVerificationCode(
    phone: string,
  ): Promise<AccountServiceResponse<LocalUser | undefined, AccountService>> {
    try {
      const user = await DataStore.query(User, (c) => c.phone('eq', phone))
      const username = user[0].id
      if (username) {
        const response = await Auth.resendSignUp(username)
        const responseDetails = new ResponseDetails(
          new MessageI18n({
            [I18nTextType.TEXT_CODE]: 'alertMessages.otpResentSuccessfully',
          }),
        )
        const result = new AccountServiceResponse(
          ResponseType.SUCCESS,
          responseDetails,
          new LocalUser(user[0]),
        )
        return result
      } else {
        const errorDetails = new ResponseDetails<AccountService>(
          new MessageI18n({
            [I18nTextType.PLAINTEXT]: 'User not found',
          }),
          {
            location: 'resendPhoneVerificationCode',
            params: {phone},
          },
        )
        const result = new AccountServiceResponse(
          ResponseType.ERROR,
          errorDetails,
          undefined,
        )
        return result
      }
    } catch (e) {
      this.logger.error(e)
      const errorDetails = new ResponseDetails<AccountService>(
        new MessageI18n({
          [I18nTextType.PLAINTEXT]:
            'Something went wrong in requesting phone OTP',
        }),
        {
          location: 'requestPhoneOtp',
          params: {phone},
        },
      )
      const result = new AccountServiceResponse(
        ResponseType.ERROR,
        errorDetails,
        undefined,
      )
      return result
    }
  }

  async signOut(): Promise<any> {
    try {
      const response = await Auth.signOut()
      return {
        data: 'alertMessages.logout',
        error: null,
      }
    } catch (e) {
      this.logger.error(e)
      return {
        error: (e as Error).message ?? 'Something went wrong',
        data: 'Something went wrong',
      }
    }
  }

  async changePassword(oldPassword: string, newPassword: string): Promise<any> {
    try {
      const user = await Auth.currentAuthenticatedUser()
      const response = await Auth.changePassword(user, oldPassword, newPassword)
      if (response === 'SUCCESS') {
        return {
          data: 'alertMessages.passwordChanged',
          error: null,
        }
      }
    } catch (e) {
      this.logger.log(e)
      return {
        error: (e as Error).message || 'Something went wrong',
        data: {},
      }
    }
  }

  async requestForgotPassword(username: string): Promise<any> {
    try {
      const response = await DataStore.query(User, (c) =>
        c.or((c) => c.phone('eq', `+91${username}`).email('eq', username)),
      )

      if (response.length === 0) {
        return {
          data: {},
          error: 'User not found',
        }
      } else {
        const currentUser = response[0]
        const requestForgotPasswordResponse = await Auth.forgotPassword(
          currentUser.id,
        )
        if (requestForgotPasswordResponse) {
          return {
            data: 'alertMessages.verifyOtp',
            error: null,
          }
        }
      }
    } catch (e) {
      this.logger.log(e)
      return {
        error: (e as Error).message || 'Something went wrong',
        data: {},
      }
    }
  }

  async submitForgotPassword(
    username: string,
    password: string,
    code: string,
  ): Promise<any> {
    try {
      const response = await DataStore.query(User, (c) =>
        c.or((c) => c.phone('eq', `+91${username}`).email('eq', username)),
      )

      if (response.length == 0) {
        return {
          data: {},
          error: 'User not found',
        }
      } else {
        const currentUser = response[0]
        const submitForgotPasswordResponse = await Auth.forgotPasswordSubmit(
          currentUser.id,
          code,
          password,
        )
        return {
          data: 'alertMessages.passwordReset',
          error: null,
        }
      }
    } catch (e) {
      this.logger.error('submitForgotPassword: Errored:', e)
      return {
        error: (e as Error).message || 'Something went wrong',
        data: {},
      }
    }
  }
}

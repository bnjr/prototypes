import {CognitoIdentityProviderClient} from '@aws-sdk/client-cognito-identity-provider'
import {Profile, User} from '../../models/amplify'
import {User as LocalUser} from '../../models/local'
import {ApiService} from '../api/api.service'
import {AccountServiceResponse} from './account-service.response'
import {AccountServiceImpl} from './account.service.impl'

export interface AccountService extends ApiService {
  /**
   * Requests an OTP for a given phone number
   * @param username
   * @param password
   */
  //login(username: string, password: string): Promise<ServiceResponse<User>>
  login(username: string, password: string): Promise<any>
  signUp(
    phone: string,
    email: string,
    password: string,
    profile: Profile,
    withoutContactInfo?: boolean,
  ): Promise<AccountServiceResponse<LocalUser | undefined, AccountServiceImpl>>
  confirmSignUp(
    phone: string,
    code: string,
    password: string,
  ): Promise<AccountServiceResponse<LocalUser | undefined, AccountService>>
  requestEmailOtp(
    currentUser: LocalUser,
    email: string,
  ): Promise<AccountServiceResponse<LocalUser | undefined, AccountService>>
  requestPhoneOtp(
    currentUser: LocalUser,
    phone: string,
  ): Promise<AccountServiceResponse<LocalUser | undefined, AccountService>>
  verifyPhoneOtp(
    code: string,
  ): Promise<AccountServiceResponse<LocalUser | undefined, AccountService>>
  verifyEmailOtp(
    user: LocalUser,
    code: string,
  ): Promise<AccountServiceResponse<LocalUser | undefined, AccountService>>
  resendEmailVerificationCode(): Promise<any>
  resendPhoneVerificationCode(code: string): Promise<any>
  fetchCurrentUser(): Promise<
    AccountServiceResponse<LocalUser | undefined, AccountService>
  >
  signOut(): Promise<any>
  changePassword(oldPassword: string, newPassword: string): Promise<any>
  requestForgotPassword(username: string): Promise<any>
  submitForgotPassword(
    username: string,
    password: string,
    code: string,
  ): Promise<any>
  searchByName(
    // identityClient: CognitoIdentityServiceProvider,
    identityClient: CognitoIdentityProviderClient,
    userPoolId: string,
    name: string,
  ): Promise<AccountServiceResponse<any, AccountServiceImpl>>
  getUsers(
    // identityClient: CognitoIdentityServiceProvider,
    identityClient: CognitoIdentityProviderClient,
    userPoolId: string,
    limit: number,
  ): Promise<AccountServiceResponse<any, AccountServiceImpl>>
  getUserFromId(
    userId: string,
  ): Promise<AccountServiceResponse<User | undefined, AccountServiceImpl>>
}

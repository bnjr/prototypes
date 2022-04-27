//! ! ! I M P O R T A N T ! ! !
//Keep it synced with other apps
import {Model} from './model'
import {Address} from './address'
import {Initials} from '../../helpers'
import {SkillList} from './skill-list'
import {Gender, Profile} from '../amplify/'
import {isEmpty} from 'lodash'

export class User extends Model {
  private firstName: string
  private lastName: string
  private phone: string
  private email: string
  private avatar: string
  private dob: Date
  private about: string
  private subId: string
  private gender: Gender | undefined
  address: Address
  skills: SkillList
  private isEmailVerified: boolean
  private isPhoneVerified: boolean
  private isProfileComplete: boolean
  private isSkillComplete: boolean
  private organisationID: string
  private isActive: boolean
  private _profile: Profile[] = []

  constructor(user: any) {
    super(user)

    this.firstName = user?.firstName ?? ''
    this.lastName = user?.lastName ?? ''
    this.dob = user?.dob ?? ''
    this.about = user?.about ?? ''
    this.avatar = user?.avatar ?? ''
    this.email = user?.email ?? ''
    this.gender = user?.gender ?? undefined
    this.address = new Address(user?.address)
    this.skills = new SkillList(user?.skills)
    this.phone = user?.phone ?? ''
    this.isActive = user?.isActive
    this.isPhoneVerified = user?.isPhoneVerified ?? false
    this.isEmailVerified = user?.isEmailVerified ?? false
    this.isProfileComplete = user?.isProfileComplete ?? false
    this.isSkillComplete = user?.isSkillComplete ?? false
    this.organisationID = user?.organisationID ?? ''
    this.subId = user?.subId ?? ''
    this.profile = user?.profile ?? []
  }

  /**
   * callback function when the package switch is toggled.
   */
  toggle(): void {
    this.isActive = !this.isActive
  }

  exists() {
    return !!this.getId()
  }

  getName = (): string => {
    return `${this.firstName} ${this.lastName}`
  }

  getDob = (): Date => {
    return this.dob
  }

  getPhone = (): string => {
    return this.phone
  }

  getFirstName = (): string => {
    return this.firstName
  }

  getLastName = (): string => {
    return this.lastName
  }

  getFullName = (): string => {
    return `${this.firstName} ${this.lastName}`
  }

  getAvatar = (): string => {
    return this.avatar
  }

  getInitials = (): string => {
    return this.initials
  }

  getEmail = (): string => {
    return this.email
  }

  getGender = (): Gender | undefined => {
    return this.gender
  }

  getIsPhoneVerified = (): boolean => {
    return this.isPhoneVerified
  }

  getIsEmailVerified = (): boolean => {
    return this.isEmailVerified
  }

  getIsProfileComplete = (): boolean => {
    return this.isProfileComplete
  }

  getIsSkillComplete = (): boolean => {
    return this.isSkillComplete
  }

  getAddress = (): Address => {
    return this.address
  }

  getAbout = (): string => {
    return this.about
  }

  getOrganisationId = (): string => {
    return this.organisationID
  }

  getSubId = (): string => {
    return this.subId
  }

  setOrganisationId = (organisationID: string): void => {
    this.organisationID = organisationID
  }

  get profile(): Profile[] {
    return this._profile
  }

  set profile(role: Profile | Profile[]) {
    typeof role === 'object'
      ? (this._profile = [...role])
      : this._profile.push(role)
  }

  get initials() {
    return Initials.getInitials(this.getName()) ?? ''
  }

  isOwner(): boolean {
    if (this.profile.indexOf(Profile.OWNER) !== -1) return true
    else return false
  }
  isCustomer(): boolean {
    if (this.profile.indexOf(Profile.CUSTOMER) !== -1) return true
    else return false
  }
  isAssociate(): boolean {
    if (this.profile.indexOf(Profile.ASSOCIATE) !== -1) return true
    else return false
  }

}

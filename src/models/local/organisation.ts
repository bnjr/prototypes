//! ! ! I M P O R T A N T ! ! !
//Keep it synced with other apps
import {observable} from 'mobx'
import {Address} from './address'
import {Media} from '../amplify/'
import {Model} from './model'

export class Organisation extends Model {
  private name: string
  private about: string
  readonly address: Address
  private phone: string
  private email: string
  private isActive: boolean
  readonly media: Media
  private slug: string
  private readonly isOrganisationComplete: boolean
  private readonly isSetupCompleted: boolean

  constructor(organisation: any) {
    super(organisation)

    this.name = organisation?.name || ''
    this.about = organisation?.about || ''
    this.email = organisation?.email || ''
    this.phone = organisation?.phone || ''
    this.isActive = organisation?.isActive || ''
    this.address = new Address(organisation.address) || new Address({})
    this.media =
      new Media(organisation.media) ||
      new Media({
        images: [],
        video: [],
        banner: null,
        logo: null,
      })
    this.slug = organisation.slug || ''
    this.isOrganisationComplete = organisation?.isOrganisationComplete ?? false
    this.isSetupCompleted = organisation?.isSetupCompleted ?? false
  }

  getName(): string {
    return this.name
  }

  getIsActive(): boolean {
    return this.isActive
  }

  getAbout(): string {
    return this.about
  }

  getEmail(): string {
    return this.email
  }

  getPhone(): string {
    return this.phone
  }

  getAddress(): Address {
    return this.address
  }

  getSlug(): string {
    return this.slug
  }

  getIsOrganisationComplete = (): boolean => {
    return !!this.isOrganisationComplete ? this.isOrganisationComplete : false
  }

  getIsSetupComplete = (): boolean => {
    return this.isSetupCompleted
  }
}

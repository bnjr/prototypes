import {Address} from '../models/amplify'

export interface OrganisationInput {
  name: string
  about: string
  address?: Address
  phone?: string
  email?: string
  logoData?: any
  bannerData?: any
  isLogoRemoved?: boolean
  isBannerRemoved?: boolean
}

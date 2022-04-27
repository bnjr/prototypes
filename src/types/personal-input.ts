import {Address, Gender} from '../models/amplify'

export interface PersonalInput {
  name: string
  dob?: Date
  about?: string
  gender?: Gender
  address?: Address
  imageData?: any
  isImageRemoved?: boolean
}

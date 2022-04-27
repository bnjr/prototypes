import {ServiceDefinition, Skill} from '../../models/amplify'
import {
  User as LocalUser,
  Organisation as LocalOrganisation,
  Service,
  Settings,
} from '../../models/local/'
import {ServiceList} from '../../models/local/service-list'
import {PersonalInput} from '../../types/personal-input'
import {ApiService} from '../api/api.service'
import {OrganisationInput} from '../../types/organisaion-input'
import {AppServiceReturn} from '../../types/app-service'

export interface AppService extends ApiService {
  /**
   * Returns a list of services for a logged in user
   */
  createOrganisation(
    currentUser: LocalUser,
    data: OrganisationInput,
  ): Promise<any>
  updateOrganisation(
    currentUser: LocalUser,
    data: OrganisationInput,
  ): Promise<AppServiceReturn<LocalOrganisation> | undefined>
  getOrganisation(
    currentUser: LocalUser,
  ): Promise<AppServiceReturn<LocalOrganisation> | undefined>
  updatePersonalDetails(
    currentUser: LocalUser,
    personalData: PersonalInput,
    isProfileCompleted?: boolean,
  ): Promise<AppServiceReturn<LocalUser | undefined>>
  updateSkillDetails(
    currentUser: LocalUser,
    data: Skill[],
  ): Promise<AppServiceReturn<LocalUser> | undefined>
  addService(organisation: LocalOrganisation, service: Service): Promise<any>
  getServices(
    organisation: LocalOrganisation,
  ): Promise<AppServiceReturn<ServiceList> | undefined>
  deleteService(serviceId: string): Promise<any>
  saveSettings(
    user: LocalUser,
    settings: Settings,
  ): Promise<AppServiceReturn<Settings> | undefined>
  getSettings(
    user: LocalUser,
    deviceId: string,
  ): Promise<AppServiceReturn<Settings> | undefined>
  addMediaImages(
    currentUser: LocalUser,
    data: any,
  ): Promise<AppServiceReturn<LocalOrganisation> | undefined>
  removeMediaImage(
    currentUser: LocalUser,
    image: any,
  ): Promise<AppServiceReturn<LocalOrganisation> | undefined>
  addLink(
    currentUser: LocalUser,
    link: string,
  ): Promise<AppServiceReturn<LocalOrganisation> | undefined>
  removeLink(
    currentUser: LocalUser,
    link: string,
  ): Promise<AppServiceReturn<LocalOrganisation> | undefined>
  deleteImageFromS3(filename: string, folder: string): Promise<any>
  getServiceDefinitions(): Promise<
    AppServiceReturn<ServiceDefinition[]> | undefined
  >
}

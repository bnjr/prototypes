// import 'react-native-get-random-values' //Needed for https://github.com/uuidjs/uuid#getrandomvalues-not-supported
import {v4 as uuidv4} from 'uuid'
import _ from 'lodash'
import {OrganisationInput} from './../../types/organisaion-input'
import {Storage} from '@aws-amplify/storage'
import {AppService} from './app.service'
import {
  Organisation,
  Service,
  Skill,
  User,
  Address,
  Media,
  Package,
  Amount,
  Image,
  ServiceDefinition,
  Settings,
} from '../../models/amplify'
import {
  Organisation as LocalOrganisation,
  User as LocalUser,
  ServiceList,
  Service as LocalService,
  Settings as LocalSettings,
} from '../../models/local/'
import {DataStore} from '@aws-amplify/datastore'
import {PersonalInput} from '../../types/personal-input'
// import ImageResizer from 'react-native-image-resizer'
import {AppServiceReturn} from '../../types/app-service'
import {ApiServiceImpl} from '../api/api.service.impl'
import {ServiceTypes} from '../api/api.service'
// import {FormatDate, SlugHelper} from '../../helpers'
import {OrganisationOwners} from '../../models/amplify'

export class AppServiceImpl extends ApiServiceImpl implements AppService {
  constructor(serviceType?: ServiceTypes) {
    super(serviceType ? serviceType : ServiceTypes.APP_SERVICE)
  }

  async addService(
    organisation: LocalOrganisation,
    service: LocalService,
  ): Promise<AppServiceReturn<LocalService>> {
    try {
      if (organisation) {
        const packages: Package[] = []
        service.getPackages().items.map((_package) => {
          packages.push({
            name: _package.getName(),
            price: new Amount({
              amount: _package.getPrice().amount,
              currency: _package.getPrice().currency,
            }),
            duration: _package.getDuration(),
            noOfSessions: _package.getNoOfSessions(),
            isActive: true,
          })
        })
        this.logger.info('List of packages', packages)

        const serviceData = {
          organisationID: organisation.getId(),
          name: service.getName(),
          description: service.getDescription(),
          packages: packages,
          isActive: true,
        }

        const isServiceExist = await DataStore.query(Service, service.getId())

        if (!isServiceExist) {
          const response = await DataStore.save(new Service(serviceData))
          const result: AppServiceReturn<LocalService> = {
            success: true,
            object: new LocalService(response),
            message: 'alertMessages.serviceCreated',
          }
          return result
        } else {
          const updatedService = await DataStore.save(
            Service.copyOf(isServiceExist, (updated) => {
              updated.name = service.getName()
              updated.description = service.getDescription()
              updated.packages = packages
            }),
          )
          const result: AppServiceReturn<LocalService> = {
            success: true,
            object: new LocalService(updatedService),
            message: 'alertMessages.serviceUpdated',
          }
          return result
        }
      } else {
        this.logger.error('addService: No organisation sent')
        const result: AppServiceReturn<LocalService> = {
          success: false,
          object: undefined,
          message: 'No organisation',
        }
        return result
      }
    } catch (e: any) {
      this.logger.error('addService', e)
      const result: AppServiceReturn<LocalService> = {
        success: false,
        object: undefined,
        message: 'Something went wrong ' + (e as Error).message,
      }
      return result
    }
  }

  async getServices(
    organisation: LocalOrganisation,
  ): Promise<AppServiceReturn<ServiceList> | undefined> {
    try {
      if (organisation.getId()) {
        const services = (await DataStore.query(Service)).filter(
          (c) => c.organisation?.id === organisation.getId(),
        )
        const result: AppServiceReturn<ServiceList> = {
          success: true,
          object: new ServiceList(services),
          message: 'alertMessages.serviceFound',
        }
        return result
      } else {
        const result: AppServiceReturn<ServiceList> = {
          success: false,
          object: undefined,
          message: 'Something went wrong',
        }
        return result
      }
    } catch (err) {
      this.logger.error('getServices', err)
    }
  }

  async getServiceDefinitions(): Promise<
    AppServiceReturn<ServiceDefinition[]> | undefined
  > {
    const serviceDefinitions = await DataStore.query(ServiceDefinition)
    if (serviceDefinitions) {
      const result: AppServiceReturn<ServiceDefinition[]> = {
        success: true,
        object: serviceDefinitions,
        message: 'alertMessages.serviceFound',
      }
      return result
    } else {
      const result: AppServiceReturn<ServiceDefinition[]> = {
        success: false,
        object: undefined,
        message: 'Something went wrong',
      }
      return result
    }
  }

  async deleteService(
    serviceId: string,
  ): Promise<AppServiceReturn<ServiceList> | undefined> {
    try {
      const serviceToDelete = await DataStore.query(Service, serviceId)
      if (serviceToDelete) {
        const response = await DataStore.delete(serviceToDelete)
      }

      const result: AppServiceReturn<ServiceList> = {
        success: true,
        object: undefined,
        message: 'alertMessages.serviceDeleted',
      }
      return result
    } catch (e: any) {
      this.logger.error('deleteService', e)
      const result: AppServiceReturn<ServiceList> = {
        success: false,
        object: undefined,
        message: 'Something went wrong ' + (e as Error).message,
      }
      return result
    }
  }

  async saveSettings(
    user: LocalUser,
    settings: LocalSettings,
  ): Promise<AppServiceReturn<LocalSettings> | undefined> {
    try {
      if (user.getId()) {
        const existingSettings = (await DataStore.query(Settings)).filter(
          (c) =>
            c.users?.id === user.getId() &&
            c.deviceID === settings.getDeviceID(),
        )
        if (existingSettings.length > 0) {
          const updatedSettings = await DataStore.save(
            Settings.copyOf(existingSettings[0], (updated) => {
              updated.calendarID = settings.getCalendarID()
            }),
          )
          const result: AppServiceReturn<LocalSettings> = {
            success: true,
            object: new LocalSettings(updatedSettings),
            message: 'alertMessages.settingsSaved',
          }
          return result
        } else {
          const userDB = await DataStore.query(User, user.getId())
          const savedSettings = await DataStore.save(
            new Settings({
              users: userDB,
              deviceID: settings.getDeviceID(),
              calendarID: settings.getCalendarID(),
            }),
          )
          const result: AppServiceReturn<LocalSettings> = {
            success: true,
            object: new LocalSettings(savedSettings),
            message: 'alertMessages.settingsSaved',
          }
          return result
        }
      }
    } catch (err) {
      this.logger.error('saveSettings', err)
      const result: AppServiceReturn<LocalSettings> = {
        success: false,
        object: undefined,
        message: 'Something went wrong ' + (err as Error).message,
      }
      return result
    }
  }

  async getSettings(
    user: LocalUser,
    deviceId: string,
  ): Promise<AppServiceReturn<LocalSettings> | undefined> {
    try {
      if (user.getId()) {
        const settings = (await DataStore.query(Settings)).filter(
          (c) => c.users?.id === user.getId() && c.deviceID === deviceId,
        )
        const result: AppServiceReturn<LocalSettings> = {
          success: true,
          object: new LocalSettings(settings[0]),
          message: 'alertMessages.settingsFound',
        }
        return result
      } else {
        const result: AppServiceReturn<LocalSettings> = {
          success: false,
          object: undefined,
          message: 'Something went wrong',
        }
        return result
      }
    } catch (err) {
      this.logger.error('getSettings', err)
      const result: AppServiceReturn<LocalSettings> = {
        success: false,
        object: undefined,
        message: 'Something went wrong ' + (err as Error).message,
      }
      return result
    }
  }

  async createOrganisation(
    currentUser: LocalUser,
    data: OrganisationInput,
  ): Promise<AppServiceReturn<LocalOrganisation> | undefined> {
    try {
      const owner = (await DataStore.query(User, currentUser.getId())) as User
      if (currentUser) {
        let logoFileName: string | undefined
        let bannerFileName: string | undefined
        if (data.logoData) {
          logoFileName = await this.uploadImageToS3(
            data.logoData,
            'images/organisation/profile',
          )
        }
        if (data.bannerData) {
          bannerFileName = await this.uploadImageToS3(
            data.bannerData,
            'images/organisation/profile',
          )
        }

        const orgData = {
          isOrganisationComplete: true,
          name: data.name,
          about: data.about,
          // owner: owner,
          // organisationOwnerId: owner.id,
          // slug: SlugHelper.convertToSlug(data.name),
          address: data.address,
          phone: data.phone,
          email: data.email,
          media: new Media({
            logo: logoFileName ?? '',
            banner: bannerFileName ?? '',
            images: [],
            video: [],
          }),
        }

        const orgDB = await DataStore.save(new Organisation(orgData))

        const relationOrgOwner = await DataStore.save(
          new OrganisationOwners({user: owner, organisation: orgDB}),
        )

        const result: AppServiceReturn<LocalOrganisation> = {
          success: true,
          object: new LocalOrganisation(orgDB),
          message: 'alertMessages.organisationCreated',
        }
        return result
      }
    } catch (e: any) {
      this.logger.error('createOrganisation', e)
      const result: AppServiceReturn<LocalOrganisation> = {
        success: false,
        object: undefined,
        message: 'Something went wrong ' + (e as Error).message,
      }
      return result
    }
  }

  async updateOrganisation(
    currentUser: LocalUser,
    data: OrganisationInput,
  ): Promise<AppServiceReturn<LocalOrganisation> | undefined> {
    try {
      if (currentUser) {
        const organisations = (await DataStore.query(OrganisationOwners))
          .filter((oo) => oo.user.id === currentUser.getId())
          .map((oo) => oo.organisation)

        let logoFileName: string | undefined
        let bannerFileName: string | undefined
        if (data.logoData) {
          logoFileName = await this.uploadImageToS3(
            data.logoData,
            'images/organisation/profile',
          )
        }

        if (data.bannerData) {
          bannerFileName = await this.uploadImageToS3(
            data.bannerData,
            'images/organisation/profile',
          )
        }

        const original = organisations[0]

        const logoUri = data.isLogoRemoved
          ? ''
          : logoFileName
          ? logoFileName
          : original?.media?.logo

        const bannerUri = data.isBannerRemoved
          ? ''
          : bannerFileName
          ? bannerFileName
          : original?.media?.banner

        const updatedOrganisation = await DataStore.save(
          Organisation.copyOf(original, (updated) => {
            updated.name = data.name
            updated.about = data.about
            updated.email = data.email
            updated.phone = data.phone
            updated.address = data.address
            updated.media = new Media({
              logo: logoUri,
              banner: bannerUri,
              images: original.media?.images ?? [],
              video: original.media?.video ?? [],
            })
          }),
        )

        const result: AppServiceReturn<LocalOrganisation> = {
          success: true,
          object: new LocalOrganisation(updatedOrganisation),
          message: 'alertMessages.organisationDetailsUpdated',
        }
        return result
      }
    } catch (e) {
      const result: AppServiceReturn<LocalOrganisation> = {
        success: false,
        object: undefined,
        message: 'Something went wrong ' + (e as Error).message,
      }
      return result
    }
  }

  async getOrganisation(
    currentUser: LocalUser,
  ): Promise<AppServiceReturn<LocalOrganisation> | undefined> {
    const organisationOwners = (await DataStore.query(OrganisationOwners))
      .filter((oo) => oo.user.id === currentUser.getId())
      .map((oo) => oo.organisation)
    if (organisationOwners.length > 0) {
      // const organisations = await DataStore.query(Organisation, (c) =>
      //   c.id('eq', currentUser.getOrganisationId()!),
      // )
      const result: AppServiceReturn<LocalOrganisation> = {
        success: true,
        object: new LocalOrganisation(organisationOwners[0]),
        message: 'alertMessages.organisationDetailsFound',
      }
      return result
    }
  }

  async addMediaImages(
    currentUser: LocalUser,
    image: any,
  ): Promise<AppServiceReturn<LocalOrganisation> | undefined> {
    let i
    let images: Image[] = []
    try {
      const organisations = (await DataStore.query(OrganisationOwners))
        .filter((oo) => oo.user.id === currentUser.getId())
        .map((oo) => oo.organisation)

      const currentOrganisation = organisations[0]
      if (currentOrganisation) {
        if (currentOrganisation.media?.images) {
          // @ts-ignore
          images = [...currentOrganisation.media?.images]
        }
        for (i = 0; i < image.length; i++) {
          let mediaImageName = await this.uploadMediaImageToS3(
            image[i],
            'images/organisation/media',
          )

          let mediaTNImageName = await this.uploadMediaTNImageToS3(
            image[i],
            'images/organisation/media',
            mediaImageName!,
          )

          if (mediaTNImageName) {
            images.push(
              new Image({
                filename: mediaImageName!,
                width: image[i].width.toString(),
                height: image[i].height.toString(),
              }),
            )
          }
        }
        const updatedOrg = await DataStore.save(
          Organisation.copyOf(currentOrganisation, (updated) => {
            updated.media = new Media({
              images: images,
              video: currentOrganisation.media?.video!,
              logo: currentOrganisation.media?.logo,
              banner: currentOrganisation.media?.banner,
            })
          }),
        )

        const result: AppServiceReturn<LocalOrganisation> = {
          success: true,
          object: new LocalOrganisation(updatedOrg),
          message: 'alertMessages.imageUploaded',
        }
        this.logger.debug(result)
        return result
      }
    } catch (e) {
      this.logger.error('addMediaImages', (e as Error).message)
      const result: AppServiceReturn<LocalOrganisation> = {
        success: false,
        object: undefined,
        message: 'alertMessages.somethingWentWrong',
      }
      return result
    }
  }

  async removeMediaImage(
    currentUser: LocalUser,
    image: any,
  ): Promise<AppServiceReturn<LocalOrganisation> | undefined> {
    try {
      const organisations = (await DataStore.query(OrganisationOwners))
        .filter((oo) => oo.user.id === currentUser.getId())
        .map((oo) => oo.organisation)
      const original = organisations[0]

      const thumbnail =
        image.filename.split('.').shift() +
        '_tn' +
        '.' +
        image.filename.split('.').pop()

      await this.deleteImageFromS3(image.filename, 'images/organisation/media/')
      await this.deleteImageFromS3(thumbnail, 'images/organisation/media/')

      if (original) {
        // @ts-ignore
        const images: Image[] = [...original.media?.images]

        const deleteIndex = _.findIndex(
          images,
          (item) => item.filename === image.filename,
        )

        if (deleteIndex >= 0) {
          images.splice(deleteIndex, 1)
        }

        const updatedOrg = await DataStore.save(
          Organisation.copyOf(original, (updated) => {
            updated.media = new Media({
              images: images,
              video: original.media?.video!,
              banner: original.media?.banner,
              logo: original.media?.logo,
            })
          }),
        )
        const result: AppServiceReturn<LocalOrganisation> = {
          success: true,
          object: new LocalOrganisation(updatedOrg),
          message: 'alertMessages.imageRemoved',
        }
        return result
      }
    } catch (e: unknown) {
      this.logger.error('removeMediaImage', e)
      const result: AppServiceReturn<LocalOrganisation> = {
        success: false,
        object: undefined,
        message: 'Something went wrong ' + (e as Error).message,
      }
      return result
    }
  }

  async addLink(
    currentUser: LocalUser,
    link: string,
  ): Promise<AppServiceReturn<LocalOrganisation> | undefined> {
    try {
      const organisations = (await DataStore.query(OrganisationOwners))
        .filter((oo) => oo.user.id === currentUser.getId())
        .map((oo) => oo.organisation)

      const original = organisations[0]

      if (original) {
        // @ts-ignore
        const newLinks: string[] = [...original.media?.video]
        newLinks.push(link)

        const updatedOrg = await DataStore.save(
          Organisation.copyOf(original, (updated) => {
            updated.media = new Media({
              video: newLinks,
              banner: original.media?.banner,
              logo: original.media?.logo,
              images: original.media?.images!,
            })
          }),
        )
        const result: AppServiceReturn<LocalOrganisation> = {
          success: true,
          object: new LocalOrganisation(updatedOrg),
          message: 'alertMessages.linkAdded',
        }
        return result
      }
    } catch (e: unknown) {
      this.logger.error('addLink', e)
      const result: AppServiceReturn<LocalOrganisation> = {
        success: false,
        object: undefined,
        message: 'Something went wrong ' + (e as Error).message,
      }
      return result
    }
  }

  async removeLink(
    currentUser: LocalUser,
    link: string,
  ): Promise<AppServiceReturn<LocalOrganisation> | undefined> {
    try {
      const organisations = (await DataStore.query(OrganisationOwners))
        .filter((oo) => oo.user.id === currentUser.getId())
        .map((oo) => oo.organisation)

      const original = organisations[0]

      if (original.media?.video) {
        const newLinks: string[] = [...original.media?.video as string[]]
        newLinks.splice(newLinks.indexOf(link), 1)

        const updatedOrg = await DataStore.save(
          Organisation.copyOf(original, (updated) => {
            updated.media = new Media({
              video: newLinks,
              banner: original.media?.banner,
              logo: original.media?.logo,
              images: original.media?.images!,
            })
          }),
        )
        const result: AppServiceReturn<LocalOrganisation> = {
          success: true,
          object: new LocalOrganisation(updatedOrg),
          message: 'alertMessages.linkRemoved',
        }
        return result
      }
    } catch (e: unknown) {
      this.logger.error('removeLink', e)
      const result: AppServiceReturn<LocalOrganisation> = {
        success: false,
        object: undefined,
        message: 'Something went wrong ' + (e as Error).message,
      }
      return result
    }
  }

  async updatePersonalDetails(
    currentUser: LocalUser,
    personalData: PersonalInput,
    isProfileComplete: boolean = true,
  ): Promise<AppServiceReturn<LocalUser | undefined>> {
    try {
      // this.logger.warn({currentUser})
      const originalUser = await DataStore.query(User, currentUser.getId())
      if (originalUser) {
        const firstName = personalData.name.split(' ').slice(0, -1).join(' ')
        const lastName = personalData.name.split(' ').slice(-1).join(' ')
        let fileName: string | undefined = undefined
        if (personalData.imageData) {
          fileName = await this.uploadImageToS3(
            personalData.imageData,
            'images/provider/profile',
          )
        }
        const imageUri = personalData.isImageRemoved
          ? ''
          : fileName
          ? fileName
          : originalUser.avatar

        const updateResponse = await DataStore.save(
          User.copyOf(originalUser, (updated) => {
            updated.firstName = firstName
            updated.lastName = lastName
            updated.gender = personalData.gender ?? null
            // updated.dob = personalData.dob
            //   ? FormatDate.awsFormat(personalData.dob as Date)
            //   : null
            updated.about = personalData.about ?? null
            updated.isProfileComplete = isProfileComplete
            updated.address = personalData.address
              ? new Address(personalData.address!)
              : null
            updated.avatar = imageUri ?? null
          }),
        )
        const result: AppServiceReturn<LocalUser> = {
          success: true,
          object: new LocalUser(updateResponse),
          message: 'Personal Details Updated',
        }
        return result
      } else {
        const result: AppServiceReturn<LocalUser> = {
          success: false,
          object: undefined,
          message: 'Something went wrong',
        }
        return result
      }
    } catch (e: unknown) {
      this.logger.error('updatePersonalDetails', e)
      const userInfo: AppServiceReturn<undefined> = {
        success: false,
        object: undefined,
        message: 'Something went wrong ' + (e as Error).message,
      }
      return userInfo
    }
  }

  async updateSkillDetails(
    currentUser: LocalUser,
    data: Skill[],
  ): Promise<AppServiceReturn<LocalUser> | undefined> {
    try {
      const original = await DataStore.query(User, currentUser.getId())
      if (original) {
        const updateResponse = await DataStore.save(
          User.copyOf(original, (updated) => {
            updated.skills = data
            updated.isSkillComplete = true
          }),
        )
        const result: AppServiceReturn<LocalUser> = {
          success: true,
          object: new LocalUser(updateResponse),
          message: 'alertMessages.skillDetailsUpdated',
        }
        return result
      }
    } catch (e: unknown) {
      this.logger.error('updateSkillsDetails', e)
      const userInfo: AppServiceReturn<LocalUser> = {
        success: false,
        object: undefined,
        message: 'Something went wrong ' + (e as Error).message,
      }
      return userInfo
    }
  }

  async uploadImageToS3(
    data: any,
    folder: string,
  ): Promise<string | undefined> {
    try {
      const response = await fetch(data.path)
      const blob = await response.blob() // format the data for images
      const fileName = data.path.split('\\').pop().split('/').pop()
      const uploadResponse = await Storage.put(folder + '/' + fileName, blob, {
        contentType: 'image/*',
      })
      return fileName
    } catch (e) {
      this.logger.error('uploadImageToS3', e)
    }
  }

  async deleteImageFromS3(filename: string, folder: string): Promise<any> {
    try {
      const deleteResponse = await Storage.remove(folder + filename)
    } catch (e) {
      this.logger.error('deleteImageFromS3', e)
    }
  }

  async uploadMediaImageToS3(
    data: any,
    folder: string,
  ): Promise<string | undefined> {
    try {
      const response = await fetch(data.path)
      const blob = await response.blob() // format the data for images
      const extension = data.path.split('.').pop()
      const fileName = uuidv4() + '.' + extension
      const uploadResponse = await Storage.put(folder + '/' + fileName, blob, {
        contentType: data.mime,
      })
      return fileName
    } catch (e) {
      this.logger.error('uploadMediaImageToS3', e)
    }
  }

  async uploadMediaTNImageToS3(
    data: any,
    folder: string,
    originalFileName: string,
  ): Promise<string[] | undefined> {
    try {
      const ratio = data.width / data.height
      const newWidth = Math.min(320, data.height * ratio)
      const newHeight = newWidth / ratio

      const resizedImage = await ImageResizer.createResizedImage(
        data.path,
        newHeight,
        newWidth,
        'PNG',
        100,
        0,
        undefined,
      )
      const response = await fetch('file://' + resizedImage.path)
      const blob = await response.blob() // format the data for images
      const fileName =
        originalFileName.split('.').shift() + //name
        '_tn' +
        '.' +
        originalFileName.split('.').pop() //extension
      const uploadResponse = await Storage.put(folder + '/' + fileName, blob, {
        contentType: data.mime,
      })
      return new Array(fileName, newWidth.toString(), newHeight.toString())
    } catch (e) {
      this.logger.error('uploadMediaTNImageToS3', e)
    }
  }
}

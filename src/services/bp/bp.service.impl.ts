import {BPService} from './bp.service'
import {BPServiceResponse} from './bp-service.response'
import {
  Organisation as LocalOrganisation,
  User as LocalUser,
  Customer,
  CustomerList,
  MessageI18n,
  I18nTextType,
  AssociateList,
  SubscriptionList,
  Subscription,
  BPFactory,
  Keys,
  SingleKeys,
} from '../../models/local'
import {DataStore} from 'aws-amplify'
import {
  ServiceSubscription,
  User,
  Profile,
  Organisation,
} from '../../models/amplify'
import {AccountServiceImpl} from '../account/account.service.impl'
import {ServiceTypes} from '../api/api.service'
import {ResponseType} from '../core/service.response'
import {ResponseDetails} from '../core/details.response'
import {v4 as uuidv4} from 'uuid'
import {AppService} from '../app/app.service'
import {AppServiceImpl} from '../app/app.service.impl'
import {PersonalInput} from '../../types/personal-input'

export class BPServiceImpl extends AccountServiceImpl implements BPService {
  private appService: AppService
  constructor() {
    super(ServiceTypes.BP_SERVICE)
    this.appService = new AppServiceImpl(ServiceTypes.BP_SERVICE)
  }

  async getCustomers(
    organisation: LocalOrganisation,
  ): Promise<BPServiceResponse<CustomerList, BPService>> {
    return this.getBP<Keys, CustomerList>(
      Profile.CUSTOMER,
      CustomerList,
      organisation,
    )
  }

  async getAssociates(
    organisation: LocalOrganisation,
  ): Promise<BPServiceResponse<AssociateList, BPService>> {
    return this.getBP<Keys, AssociateList>(
      Profile.ASSOCIATE,
      CustomerList,
      organisation,
    )
  }

  private async getBP<K extends Keys, T>(
    bpKey: SingleKeys<K>,
    type: {new (r: User[]): T},
    organisation: LocalOrganisation,
  ): Promise<BPServiceResponse<T, BPService>> {
    try {
      if (organisation.getId()) {
        const bpType = BPFactory.getBPType(bpKey)

        const bpsByOrganisation = (await DataStore.query(bpType))
          .filter((cu) => cu.organisation.id === organisation.getId())
          .map((cu) => cu.user)

        if (bpsByOrganisation.length > 0) {
          const serviceResponse = new BPServiceResponse(
            ResponseType.SUCCESS,
            new ResponseDetails<BPService>(
              new MessageI18n({
                [I18nTextType.PLAINTEXT]: `${bpKey}s found`,
              }),
              {location: 'getCustomers', params: {organisation}},
            ),

            new type(bpsByOrganisation),
          )
          return serviceResponse
        } else {
          const serviceResponse = new BPServiceResponse(
            ResponseType.ERROR,
            new ResponseDetails<BPService>(
              new MessageI18n({
                [I18nTextType.PLAINTEXT]: `No ${bpKey}s found`,
              }),
              {location: 'getCustomers', params: {organisation}},
            ),
            undefined,
          )
          return serviceResponse
        }
      } else {
        const serviceResponse = new BPServiceResponse(
          ResponseType.ERROR,
          new ResponseDetails<BPService>(
            new MessageI18n({
              [I18nTextType.PLAINTEXT]: 'Organisation does not have an ID',
            }),
            {location: 'getCustomers', params: {organisation}},
          ),
          undefined,
        )
        return serviceResponse
      }
    } catch (error) {
      this.logger.error('getBP', error)
      const serviceResponse = new BPServiceResponse(
        ResponseType.ERROR,
        new ResponseDetails<BPService>(
          new MessageI18n({
            [I18nTextType.PLAINTEXT]: `No ${bpKey}s found`,
          }),
          {location: 'getCustomers', params: {organisation}},
        ),
        undefined,
      )
      return serviceResponse
    }
  }

  async addCustomer(
    organisation: LocalOrganisation,
    customer: LocalUser,
  ): Promise<BPServiceResponse<LocalUser, BPService>> {
    return this.addBP(Profile.CUSTOMER, organisation, customer)
  }

  async addAssociate(
    organisation: LocalOrganisation,
    associate: LocalUser,
  ): Promise<BPServiceResponse<LocalUser, BPService>> {
    return this.addBP(Profile.ASSOCIATE, organisation, associate)
  }

  private async addBP<K extends Keys>(
    bpKey: SingleKeys<K>,
    organisation: LocalOrganisation,
    bp: LocalUser,
  ): Promise<BPServiceResponse<LocalUser, BPService>> {
    try {
      if (organisation.getId()) {
        // Create user in DB and Cognito
        const signUpResponse = await this.signUp(
          bp.getPhone(),
          bp.getEmail(),
          uuidv4(),
          bpKey,
          true, // without contact info
        )
        if (
          signUpResponse.response === ResponseType.SUCCESS &&
          signUpResponse.data
        ) {
          // Update user with name
          const personalData: PersonalInput = {
            name: bp.getName(),
          }
          const updateUserResponse =
            await this.appService.updatePersonalDetails(
              signUpResponse.data,
              personalData,
              false, // Don't mark the profile to complete
            )
          if (updateUserResponse.success === true) {
            const bpType = BPFactory.getBPType(bpKey)
            const bpUser = await DataStore.save(
              new bpType({
                organisation: organisation.asAnotherType<Organisation>(),
                user: signUpResponse.data.asAnotherType<User>(),
              }),
            )
            if (bpUser) {
              const serviceResponse = new BPServiceResponse(
                ResponseType.SUCCESS,
                new ResponseDetails<BPService>(
                  new MessageI18n({
                    [I18nTextType.PLAINTEXT]: `${bpKey} added`,
                  }),
                  {location: 'addCustomer', params: {organisation, bp}},
                ),
                updateUserResponse.object,
              )
              return serviceResponse
            } else {
              const serviceResponse = new BPServiceResponse(
                ResponseType.ERROR,
                new ResponseDetails<BPService>(
                  new MessageI18n({
                    [I18nTextType.PLAINTEXT]: `${bpKey} could not be added`,
                  }),
                  {location: 'addCustomer', params: {organisation, bp}},
                ),
                undefined,
              )
              return serviceResponse
            }
          } else {
            const serviceResponse = new BPServiceResponse(
              ResponseType.ERROR,
              new ResponseDetails<BPService>(
                new MessageI18n({
                  [I18nTextType.PLAINTEXT]:
                    'Could not update BP personal details',
                }),
                {location: 'addCustomer', params: {organisation, bp}},
              ),
              undefined,
            )
            return serviceResponse
          }
        } else {
          const serviceResponse = new BPServiceResponse(
            ResponseType.ERROR,
            new ResponseDetails<BPService>(
              new MessageI18n({
                [I18nTextType.PLAINTEXT]: 'Could not signup BP',
              }),
              {location: 'addCustomer', params: {organisation, bp}},
            ),
            undefined,
          )
          return serviceResponse
        }
      } else {
        const serviceResponse = new BPServiceResponse(
          ResponseType.ERROR,
          new ResponseDetails<BPService>(
            new MessageI18n({
              [I18nTextType.PLAINTEXT]: 'Organisation does not have an ID',
            }),
            {location: 'addCustomer', params: {organisation, bp}},
          ),
          undefined,
        )
        return serviceResponse
      }
    } catch (error) {
      this.logger.error('addBP', error)
      const serviceResponse = new BPServiceResponse(
        ResponseType.ERROR,
        new ResponseDetails<BPService>(
          new MessageI18n({
            [I18nTextType.PLAINTEXT]: 'BP could not be added',
          }),
          {location: 'addCustomer', params: {organisation, bp}},
        ),
        undefined,
      )
      return serviceResponse
    }
  }

  async getSubscriptions(
    organisation: LocalOrganisation,
    customer: Customer,
  ): Promise<BPServiceResponse<SubscriptionList, BPService>> {
    try {
      if (organisation.getId() && customer.getId()) {
        const subsription = (await DataStore.query(ServiceSubscription))
          .filter(
            (ss) =>
              ss.Organisation?.id === organisation.getId() &&
              ss.User?.id === customer.getId(),
          )
          .map((ss) => Subscription.fromAmplify(ss))
        if (subsription.length > 0) {
          const serviceResponse = new BPServiceResponse(
            ResponseType.SUCCESS,
            new ResponseDetails<BPService>(
              new MessageI18n({
                [I18nTextType.PLAINTEXT]: `Subscriptions found`,
              }),
              {location: 'getSubscriptions', params: {organisation, customer}},
            ),

            new SubscriptionList(subsription),
          )
          return serviceResponse
        } else {
          const serviceResponse = new BPServiceResponse(
            ResponseType.ERROR,
            new ResponseDetails<BPService>(
              new MessageI18n({
                [I18nTextType.PLAINTEXT]: `No Subscriptions found`,
              }),
              {location: 'getSubscriptions', params: {organisation, customer}},
            ),
            undefined,
          )
          return serviceResponse
        }
      } else {
        const serviceResponse = new BPServiceResponse(
          ResponseType.ERROR,
          new ResponseDetails<BPService>(
            new MessageI18n({
              [I18nTextType.PLAINTEXT]:
                'Organisation/Customer does not have an ID',
            }),
            {location: 'getSubscriptions', params: {organisation, customer}},
          ),
          undefined,
        )
        return serviceResponse
      }
    } catch (error) {
      this.logger.error('getSubscriptions', error)
      const serviceResponse = new BPServiceResponse(
        ResponseType.ERROR,
        new ResponseDetails<BPService>(
          new MessageI18n({
            [I18nTextType.PLAINTEXT]: `No Subscriptions found`,
          }),
          {location: 'getSubscriptions', params: {organisation, customer}},
        ),
        undefined,
      )
      return serviceResponse
    }
  }

  async addSubscription(
    subscription: Subscription,
  ): Promise<BPServiceResponse<Subscription, BPService>> {
    try {
      if (subscription.organisationID && subscription.serviceID) {
        const subsription = (await DataStore.query(ServiceSubscription)).filter(
          (ss) =>
            ss.Organisation?.id === subscription.organisationID &&
            ss.User?.id === subscription.userID &&
            ss.serviceSubscriptionServiceId === subscription.serviceID,
        )
        if (subsription.length > 0) {
          const serviceResponse = new BPServiceResponse(
            ResponseType.ERROR,
            new ResponseDetails<BPService>(
              new MessageI18n({
                [I18nTextType.PLAINTEXT]: `Already subscribed to this service`,
              }),
              {location: 'addSubscription', params: {subscription}},
            ),
            undefined,
          )
          return serviceResponse
        } else {
          const serviceSubsription = await DataStore.save(
            new ServiceSubscription(subscription.toAmplify()),
          )
          const serviceResponse = new BPServiceResponse(
            ResponseType.SUCCESS,
            new ResponseDetails<BPService>(
              new MessageI18n({
                [I18nTextType.PLAINTEXT]: `Subscription saved`,
              }),
              {location: 'addSubscription', params: {subscription}},
            ),
            Subscription.fromAmplify(serviceSubsription),
          )
          return serviceResponse
        }
      } else {
        const serviceResponse = new BPServiceResponse(
          ResponseType.ERROR,
          new ResponseDetails<BPService>(
            new MessageI18n({
              [I18nTextType.PLAINTEXT]:
                'Organisation/Customer does not have an ID',
            }),
            {location: 'addSubscription', params: {subscription}},
          ),
          undefined,
        )
        return serviceResponse
      }
    } catch (error) {
      this.logger.error('addSubscription', error)
      const serviceResponse = new BPServiceResponse(
        ResponseType.ERROR,
        new ResponseDetails<BPService>(
          new MessageI18n({
            [I18nTextType.PLAINTEXT]: `No Subscriptions found`,
          }),
          {location: 'addSubscription', params: {subscription}},
        ),
        undefined,
      )
      return serviceResponse
    }
  }

  async removeSubscription(
    subscription: Subscription,
  ): Promise<BPServiceResponse<Subscription, BPService>> {
    try {
      if (subscription.organisationID && subscription.serviceID) {
        const subsription = (await DataStore.query(ServiceSubscription)).filter(
          (ss) =>
            ss.Organisation?.id === subscription.organisationID &&
            ss.User?.id === subscription.userID &&
            ss.serviceSubscriptionServiceId === subscription.serviceID,
        )
        if (subsription.length === 0) {
          const serviceResponse = new BPServiceResponse(
            ResponseType.ERROR,
            new ResponseDetails<BPService>(
              new MessageI18n({
                [I18nTextType.PLAINTEXT]: `Not subscribed`,
              }),
              {location: 'removeSubscription', params: {subscription}},
            ),
            undefined,
          )
          return serviceResponse
        } else {
          DataStore.delete(subsription[0]) // there should be one only
          const serviceResponse = new BPServiceResponse(
            ResponseType.SUCCESS,
            new ResponseDetails<BPService>(
              new MessageI18n({
                [I18nTextType.PLAINTEXT]: `Subscription deleted`,
              }),
              {location: 'removeSubscription', params: {subscription}},
            ),
            Subscription.fromAmplify(subsription[0]),
          )
          return serviceResponse
        }
      } else {
        const serviceResponse = new BPServiceResponse(
          ResponseType.ERROR,
          new ResponseDetails<BPService>(
            new MessageI18n({
              [I18nTextType.PLAINTEXT]:
                'Organisation/Customer does not have an ID',
            }),
            {location: 'removeSubscription', params: {subscription}},
          ),
          undefined,
        )
        return serviceResponse
      }
    } catch (error) {
      this.logger.error('removeSubscription', error)
      const serviceResponse = new BPServiceResponse(
        ResponseType.ERROR,
        new ResponseDetails<BPService>(
          new MessageI18n({
            [I18nTextType.PLAINTEXT]: `Subscription could not be deleted`,
          }),
          {location: 'removeSubscription', params: {subscription}},
        ),
        undefined,
      )
      return serviceResponse
    }
  }
}

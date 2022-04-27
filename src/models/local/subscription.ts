import {ServiceSubscription, Package} from '../amplify'
import {Package as LocalPackage} from './package'
import {Model} from './model'
import {Service as LocalService} from './service'

export interface ISubscriptionInput {
  id?: string
  organisationID: string
  userID: string
  serviceID: string
  service?: LocalService
  servicePackage: LocalPackage
  startDate: Date
  duration: number
  discount?: number
}

export class Subscription extends Model {
  organisationID: string
  userID: string
  servicePackage: LocalPackage
  serviceID: string
  service?: LocalService
  startDate: Date
  discount?: number
  duration: number
  constructor(subscription: ISubscriptionInput) {
    super(subscription)
    this.organisationID = subscription.organisationID
    this.userID = subscription.userID
    this.serviceID = subscription.serviceID as string
    this.service = subscription.service ?? undefined
    this.servicePackage = subscription.servicePackage
    this.startDate = subscription.startDate
    this.duration = subscription.duration
  }
  static fromAmplify(subscription: ServiceSubscription): Subscription {
    const subscriptionInput: ISubscriptionInput = {
      id: subscription.id,
      organisationID: subscription.serviceSubscriptionOrganisationId as string,
      userID: subscription.serviceSubscriptionUserId as string,
      serviceID: subscription.serviceSubscriptionServiceId as string,
      // service: new LocalService(),
      servicePackage: new LocalPackage(subscription.package),
      startDate: new Date(subscription.startDate as string),
      duration: subscription.duration as number,
      discount: subscription.discount,
    }
    return new Subscription(subscriptionInput)
  }

  toAmplify(): ServiceSubscription {
    const withoutId = true
    const subscription: ServiceSubscription = {
      id: this.getId(),
      serviceSubscriptionOrganisationId: this.organisationID as string,
      serviceSubscriptionUserId: this.userID as string,
      serviceSubscriptionServiceId: this.serviceID as string,
      package: this.servicePackage.asAnotherType<Package>(withoutId),
      startDate: this.startDate.toISOString(),
      duration: this.duration,
      discount: this.discount,
    }
    return subscription
  }
}

import {ApiService} from '../api/api.service'
import {
  Organisation as LocalOrganisation,
  CustomerList,
  Customer,
  User as LocalUser,
  SubscriptionList,
  Subscription,
  AssociateList,
} from '../../models/local/'
import {BPServiceResponse} from './bp-service.response'
export interface BPService extends ApiService {
  getCustomers(
    organisation: LocalOrganisation,
  ): Promise<BPServiceResponse<CustomerList, BPService>>
  addCustomer(
    organisation: LocalOrganisation,
    customer: Customer,
  ): Promise<BPServiceResponse<LocalUser, BPService>>
  getAssociates(
    organisation: LocalOrganisation,
  ): Promise<BPServiceResponse<AssociateList, BPService>>
  addAssociate(
    organisation: LocalOrganisation,
    associate: LocalUser,
  ): Promise<BPServiceResponse<LocalUser, BPService>>
  getSubscriptions(
    organisation: LocalOrganisation,
    customer: Customer,
  ): Promise<BPServiceResponse<SubscriptionList, BPService>>
  addSubscription(
    subscription: Subscription,
  ): Promise<BPServiceResponse<Subscription, BPService>>
  removeSubscription(
    subscription: Subscription,
  ): Promise<BPServiceResponse<Subscription, BPService>>
}

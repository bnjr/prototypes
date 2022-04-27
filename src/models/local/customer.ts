import {ISubscriptionInput, Subscription} from "./subscription"
import {SubscriptionList} from "./subscription-list"
import {User} from "./user"

interface ICustomerSubscription {
  subscribe(subscription: ISubscriptionInput): void
  subscribe(subscription: Subscription): void
}

export class Customer extends User implements ICustomerSubscription {
  subscriptions?: SubscriptionList

  constructor(user: any) {
    super(user)
    this.subscriptions = user.subscriptions ?? []
  }

  subscribe(
    ...args: [subscription: ISubscriptionInput] | [subscription: Subscription]
  ): void {
    if (args[0] instanceof Subscription) this.subscribeFromSubscription(args[0])
    else this.subscribeFromInput(args[0])
  }

  private subscribeFromInput(subscription: ISubscriptionInput) {
    this.subscriptions
      ? this.subscriptions.addItem(new Subscription(subscription))
      : (this.subscriptions = new SubscriptionList(
        new Subscription(subscription),
      ))
  }

  private subscribeFromSubscription(subscription: Subscription) {
    this.subscriptions
      ? this.subscriptions.addItem(subscription)
      : (this.subscriptions = new SubscriptionList(subscription))
  }

  unsubscribe(subscription: Subscription) {
    if (this.subscriptions) this.subscriptions.removeItem(subscription.getId())
    else throw new Error('There are no subscriptions')
  }
}

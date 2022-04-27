//! ! ! I M P O R T A N T ! ! !
//Keep it synced with other apps
import {Amount, Duration} from '../amplify/'
import {Model} from './model'

export class Package extends Model {
  /**
   * name of the package
   */
  private name: string

  /**
   * the amount for the package
   */
  private price: Required<Amount>

  /**
   * duration of the package
   */
  private duration: Duration

  /**
   * the no. of sessions in the package
   */
  private noOfSessions: number

  /**
   * Package component status.The switch will be enabled/disabled
   * based on these value.
   */
  private isActive: boolean

  constructor(data: any) {
    super(data)
    this.name = data?.name || ''
    this.duration = data?.duration || Duration.MONTHLY
    this.noOfSessions = data?.noOfSessions || 0
    this.price = data.price || new Amount({amount: '0', currency: 'INR'})
    this.isActive = data?.isActive ?? true
  }

  /**
   * callback function when the package switch is toggled.
   */
  toggle(): void {
    this.isActive = !this.isActive
  }

  getName(): string {
    return this.name
  }

  getDuration(): Duration {
    return this.duration
  }

  getPrice(): Required<Amount> {
    return this.price ?? {amount: '0', currency: 'INR'}
  }

  getNoOfSessions(): number {
    return this.noOfSessions
  }

  getIsActive(): boolean {
    return this.isActive
  }

  setName(name: string): void {
    this.name = name
  }

  setDuration(duration: Duration): void {
    this.duration = duration
  }

  setNoOfSessions(noOfSessions: number): void {
    this.noOfSessions = noOfSessions
  }

  setPrice(price: Required<Amount>): void {
    this.price = new Amount({
      amount: price.amount,
      currency: price.currency,
    }) as Required<Amount>
  }

  setIsActive(isActive: boolean): void {
    this.isActive = isActive
  }
}

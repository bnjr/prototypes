//! ! ! I M P O R T A N T ! ! !
//Keep it synced with other apps
import {Amount} from '../amplify'
import {Model} from './model'
import {TimeFormatter} from './time-formatter'

export class Fees extends Model {
  private amount: Required<Amount>

  public readonly paymentDate: TimeFormatter

  // private currency: string

  constructor(fees: any) {
    super(fees)
    this.amount = new Amount({
      amount: fees?.amount || '0',
      currency: fees?.currency || 'INR',
    }) as Required<Amount>
    this.paymentDate = new TimeFormatter(fees?.date)
    // this.currency = fees?.currency || currencies.INR.symbol
  }

  setAmount(amount: Required<Amount>): void {
    this.amount = amount
  }

  getAmount(): Required<Amount> {
    return this.amount
  }

  // getCurrency(): string {
  //   return this.currency
  // }
}

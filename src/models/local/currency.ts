//! ! ! I M P O R T A N T ! ! !
//Keep it synced with other apps
import {currencies} from '../../utils/currencies'

export class Currency {
  private name: string
  private symbol: string
  private code: string

  constructor(currency: any) {
    this.name = currency?.name || currencies.INR
    this.symbol = currency?.symbol || currencies.INR.symbol
    this.code = currency?.code || currencies.INR.code
  }

  getName(): string {
    return this.name
  }

  getSymbol(): string {
    return this.symbol
  }

  getCode(): string {
    return this.code
  }
}

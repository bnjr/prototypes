//! ! ! I M P O R T A N T ! ! !
//Keep it synced with other apps
import {Location} from '../../types'

export class Address {
  private firstLine: string
  private secondLine: string
  private locality: string
  private city: string
  private state: string
  private pin: string
  private location: Location

  constructor(address: any) {
    this.firstLine = address?.firstLine || ''
    this.secondLine = address?.secondLine || ''
    this.locality = address?.locality || ''
    this.city = address?.city || ''
    this.state = address?.state || ''
    this.pin = address?.pin || ''
    this.location = address?.location || {lat: '', long: ''}
  }

  getFirstLine(): string {
    return this.firstLine
  }

  getSecondLine(): string {
    return this.secondLine
  }

  getLocality(): string {
    return this.locality
  }

  getCity(): string {
    return this.city
  }

  getState(): string {
    return this.state
  }

  getPin(): string {
    return this.pin
  }

  getFullAddress(): string {
    return `${this.firstLine}, ${this.secondLine}, ${this.locality}, ${this.city}, ${this.state}, ${this.pin}`
  }

  getLocation(): string {
    return `${this.location.lat}, ${this.location.long}`
  }
}

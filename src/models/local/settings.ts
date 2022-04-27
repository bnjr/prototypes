import {Model} from './model'

export class Settings extends Model {
  /**
   * User's device ID
   */
  private deviceID: string

  /**
   * calender ID
   */
  private calendarID: string

  constructor(settings: any) {
    super(settings)
    this.deviceID = settings?.deviceID || ''
    this.calendarID = settings?.calendarID || ''
  }

  setDeviceId(deviceID: string): void {
    this.deviceID = deviceID
  }

  setCalendarID(calendarID: string): void {
    this.calendarID = calendarID
  }

  getDeviceID(): string {
    return this.deviceID
  }

  getCalendarID(): string {
    return this.calendarID
  }
}

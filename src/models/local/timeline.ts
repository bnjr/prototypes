//! ! ! I M P O R T A N T ! ! !
//Keep it synced with other apps
import {Model} from './model'
import {IconProps} from '../../components'
import {TimelineType} from '../../types/timeline'
import {TimeFormatter} from './time-formatter'
import {currencies} from '../../utils/currencies'
import {Amount} from '../amplify'

export class Timeline extends Model {
  private serviceName: string

  private serviceIcon: IconProps

  private timeLineType: TimelineType

  private currency: string

  private amount: Required<Amount>

  /**
   * Time will be epoch time
   */
  public readonly time: TimeFormatter

  constructor(timeline: any) {
    super(timeline)
    this.serviceName = timeline?.serviceName || ''
    this.serviceIcon = timeline?.serviceIcon || {
      name: 'sports',
      family: 'materialIcon',
    }
    this.timeLineType = timeline?.timeLineType || TimelineType.SESSION
    this.amount = new Amount({
      amount: timeline?.amount || '0',
      currency: timeline?.currency || 'INR',
    }) as Required<Amount>
    this.time = new TimeFormatter(timeline?.time)
    this.currency = timeline?.currency || currencies.INR.symbol
  }

  setServiceName(serviceName: string): void {
    this.serviceName = serviceName
  }

  setServiceIcon(serviceIcon: IconProps): void {
    this.serviceIcon = serviceIcon
  }

  setTimelineType(timeLineType: TimelineType): void {
    this.timeLineType = timeLineType
  }

  setAmount(amount: Required<Amount>): void {
    this.amount = amount
  }
  getServiceName(): string {
    return this.serviceName
  }

  getServiceIcon(): IconProps {
    return this.serviceIcon
  }

  getTimelineType(): TimelineType {
    return this.timeLineType
  }

  getAmount(): Amount {
    return this.amount
  }

  getCurrency(): string {
    return this.currency
  }

  getTime(): TimeFormatter {
    return this.time
  }

  isSession(): boolean {
    return this.timeLineType === TimelineType.SESSION
  }
}

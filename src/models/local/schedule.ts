import {DayOfTheWeek} from '../../types/weekday'
import {Address} from './address'
import {Model} from './model'

export enum Frequency {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export interface IRecurring {
  frequency: Frequency.WEEKLY
  endDate: Date
  occurrence: number
  interval: number
  dayOfTheWeek: DayOfTheWeek[]
}

export interface IScheduleInput {
  id?: string
  startTime: Date
  endTime: Date
  location?: Address
  recurring?: IRecurring
}

export class Schedule extends Model {
  startTime: Date
  endTime: Date
  location?: Address
  recurring?: IRecurring | undefined

  constructor(schedule: IScheduleInput) {
    super(schedule)
    this.startTime = schedule.startTime ?? new Date()
    this.endTime = schedule.endTime ?? new Date()
    this.location = schedule.location
    this.recurring = schedule.recurring
  }
}

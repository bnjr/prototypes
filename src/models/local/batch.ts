import {List} from '../../utils/list'
import {Customer} from './customer'
import {CustomerList} from './customer-list'
import {Model} from './model'
import {Organisation} from './organisation'
import {Schedule} from './schedule'
import {Service} from './service'
import {User} from './user'
import {UserList} from './user-list'

export interface IBatchInput {
  id?: string
  batchNumber: string
  organisation: Organisation
  service: Service
  managers: UserList
  customers: CustomerList
  schedule: Schedule
}

export interface IAttendance {
  id?: string
  user: User
  date?: Date
}

export class Attendance extends Model {
  date: Date
  user: User

  constructor(attendance: IAttendance) {
    super(attendance)
    this.user = attendance.user
    attendance.date ? (this.date = attendance.date) : (this.date = new Date())
  }
}

export interface IAttendanceRegister {
  attendance?: List<Attendance>
  addAttendance(attendance: IAttendance): void
  removeAttendance(attendance: IAttendance): void
  didAttend(date: Date, user: User): boolean
}

export class AttendanceRegister implements IAttendanceRegister {
  attendance?: List<Attendance>

  constructor() {}

  addAttendance(attendance: IAttendance): void {
    this.attendance
      ? this.attendance.addItem(new Attendance(attendance))
      : (this.attendance = new List(new Attendance(attendance), Attendance))
  }

  removeAttendance(attendance: IAttendance): void {
    if (this.attendance) {
      const attendence = this.attendance?.filter((a) => {
        return (
          a.date === attendance.date &&
          a.user.getId() === attendance.user.getId()
        )
      })

      this.attendance?.removeItem(attendence[0].getId())
    } else throw new Error('No attendence register exists.')
  }

  didAttend(date: Date, user: User): boolean {
    if (this.attendance) {
      const attendence = this.attendance?.filter((a) => {
        return a.date === date && a.user.getId() === user.getId()
      })

      return !!attendence
    } else throw new Error('No attendence register exists.')
  }
}

export class Batch extends Model {
  organisation?: Organisation
  customers: CustomerList
  managers: UserList
  service: Service
  schedule: Schedule
  attendance?: IAttendanceRegister
  batchNumber: string

  constructor(batch: IBatchInput) {
    super(batch)
    this.organisation = batch.organisation
    this.customers = batch.customers
    this.managers = batch.managers
    this.service = batch.service
    this.schedule = batch.schedule
    this.batchNumber = batch.batchNumber
  }

  addCustomer(customer: Customer) {
    this.customers.addItem(customer)
  }

  removeCustomer(customer: Customer) {
    this.customers.removeItem(customer.getId())
  }

  addManagers(manager: User) {
    this.managers.addItem(manager)
  }

  removeManager(manager: User) {
    this.managers.removeItem(manager.getId())
  }
}

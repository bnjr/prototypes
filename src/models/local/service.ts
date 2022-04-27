//! ! ! I M P O R T A N T ! ! !
//Keep it synced with other apps
import {IconProps} from '../../components'
import {Model} from './model'
import {PackageList} from './package-list'

export class Service extends Model {
  /**
   * name of the service
   */
  private name: string

  /**
   * description of the service
   */
  private description: string

  /**
   * packages included in the service
   */
  private packages: PackageList

  private icon: IconProps

  private isActive: boolean

  /**
   * location of the batch/service
   */
  // private location: string

  private noOfBatches: number

  constructor(service: any) {
    super(service)
    this.name = service?.name || ''
    this.description = service?.description || ''
    this.packages =
      service.packages?.items?.length > 0
        ? new PackageList(service?.packages?.items)
        : new PackageList(service?.packages)
    this.isActive = service.isActive || true
    this.icon = service.icon || {name: 'sports', family: 'materialIcon'}
    // this.location = service?.location || ''
    this.noOfBatches = service.noOfBatches ?? 0
  }

  /**
   * callback function when the package switch is toggled.
   */
  toggle(): void {
    this.isActive = !this.isActive
  }

  setName(name: string): void {
    this.name = name
  }

  setDescription(description: string): void {
    this.description = description
  }

  setPackages(packages: PackageList): void {
    this.packages = packages
  }

  setIcon(icon: IconProps): void {
    this.icon = icon
  }

  // setLocation(location: string): void {
  //   this.location = location
  // }

  setBatchNumber(noOfBatches: number): void {
    this.noOfBatches = noOfBatches
  }

  getName(): string {
    return this.name
  }

  getDescription(): string {
    return this.description
  }

  getPackages(): PackageList {
    return this.packages
  }

  getIsActive(): boolean {
    return this.isActive
  }

  getIcon(): IconProps {
    return this.icon
  }

  // getLocation(): string {
  //   return this.location
  // }

  getBatchNumber(): number {
    return this.noOfBatches
  }
}

import {List} from '../../utils/list'
import {Package} from './package'

export class PackageList extends List<Package> {
  constructor(rawData?: any) {
    super(rawData, Package)
  }
}

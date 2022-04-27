import {List} from '../../utils/list'
import {Associate} from './associate'

export class AssociateList extends List<Associate> {
  constructor(rawData?: any) {
    super(rawData, Associate)
  }
}

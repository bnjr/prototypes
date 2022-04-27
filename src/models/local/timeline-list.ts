import {List} from '../../utils/list'
import {Timeline} from './timeline'

export class TimelineList extends List<Timeline> {
  constructor(rawData?: any) {
    super(rawData, Timeline)
  }
}

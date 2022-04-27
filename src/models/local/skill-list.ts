import {List} from '../../utils/list'
import {Skill} from './skill'

export class SkillList extends List<Skill> {
  constructor(rawData?: any) {
    super(rawData, Skill)
  }
}

//! ! ! I M P O R T A N T ! ! !
//Keep it synced with other apps
import {SkillExperience, SkillLevel, SkillNames} from '../amplify/'
import {Model} from './model'

export class Skill extends Model {
  /**
   * name of the skill
   */
  private name: SkillNames

  /**
   * level in the skill
   */
  private level: SkillLevel

  /**
   * experience in the skill
   */
  private experience: SkillExperience

  /**
   * description about the skill
   */
  private details: string

  constructor(skill: any) {
    super(skill)
    this.name = skill?.name || SkillNames.DRAWING
    this.level = skill?.level || SkillLevel.BEGINNER
    this.experience = skill?.experience || SkillExperience.BELOWONE
    this.details = skill?.details || 'Something'

    // makeObservable
  }

  getName(): SkillNames {
    return this.name
  }

  getLevel(): SkillLevel {
    return this.level
  }

  getExperience(): SkillExperience {
    return this.experience
  }

  getDetails(): string {
    return this.details
  }

  setName(name: SkillNames) {
    this.name = name
  }

  setLevel(level: SkillLevel) {
    this.level = level
  }

  setExperience(experience: SkillExperience) {
    this.experience = experience
  }

  setDetails(details: string) {
    this.details = details
  }
}

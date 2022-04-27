export class Initials {
  static getInitials(name: string): string {
    // @ts-ignore: Object is possibly 'null'
    return `${name
      .match(/(\b\S)?/g)
      .join('')
      .match(/(^\S|\S$)?/g)
      .join('')
      .toUpperCase()}`
  }
}

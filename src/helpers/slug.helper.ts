export class SlugHelper {
  static convertToSlug(text: string): string {
    let extra: string = Math.random().toString(36).substring(7)

    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
      .concat(`-${extra}`)
  }
}

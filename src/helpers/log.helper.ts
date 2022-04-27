export function log(message: string, obj: Object) {
  if (__DEV__) console.log(`${message}: ${JSON.stringify(obj, null, 2)}`)
}

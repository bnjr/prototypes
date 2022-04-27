export type AppServiceReturn<T> = {
  success: boolean
  object: undefined | T
  message?: undefined | string
}

import _ from 'lodash'
import i18n from 'i18n-js'
import enTranslations from '../i18n/locales/en.json'
i18n.translations['en'] = enTranslations

const _translate = _.memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
)

export const translate = (key: string, config?: object) =>
  _translate(key, config || {})

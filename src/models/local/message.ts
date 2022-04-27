import {translate} from '../../helpers/translate.helper'

export enum I18nTextType {
  TEXT_CODE = 'textCode',
  PLAINTEXT = 'plainText',
}

interface MessageTx {
  [I18nTextType.TEXT_CODE]: string
}
interface MessagePlainText {
  [I18nTextType.PLAINTEXT]: string
}

export type MessageTypeI18n = MessageTx | MessagePlainText

export class MessageI18n {
  message: MessageTypeI18n
  option?: object
  constructor(message: MessageTypeI18n, option?: object) {
    this.message = message
    this.option = option
  }
  messageType = (): I18nTextType | undefined => {
    if (this.message && I18nTextType.TEXT_CODE in this.message)
      return I18nTextType.TEXT_CODE
    else if (this.message && I18nTextType.PLAINTEXT in this.message)
      return I18nTextType.PLAINTEXT
    else return undefined
  }

  getMessage = (): string | undefined => {
    switch (this.messageType()) {
      case I18nTextType.PLAINTEXT:
        if (this.message && I18nTextType.PLAINTEXT in this.message) {
          const plainText =
            this.message[I18nTextType.PLAINTEXT] || 'error_unknown'
          return plainText
        }
      case I18nTextType.TEXT_CODE:
        if (this.message && I18nTextType.TEXT_CODE in this.message)
          return translate(
            this.message[I18nTextType.TEXT_CODE] || 'error_unknown',
            this.option,
          )

      default:
        return undefined
    }
  }
}

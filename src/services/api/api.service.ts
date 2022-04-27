export enum ServiceTypes {
  ACCOUNT_SERVICE = 'accountService',
  APP_SERVICE = 'appService',
  CHAT_SERVICE = 'chatService',
  BP_SERVICE = 'bpService',
  OPS_SERVICE = 'opsService',
}
export interface ApiService {
  /**
   * @property serviceType Type of service
   */
  serviceType?: ServiceTypes
}

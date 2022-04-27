import _ from 'lodash'
// import {NavigationActions, NavigationContainerComponent} from 'react-navigation'
import {AxiosError} from 'axios'

export enum Listeners {
  UNAUTHORISED = 'unauthorised',
}

export class ServiceErrorHandler {
  static STATUS = {
    UNAUTHORISED: 401,
  }
  static ROUTE_NAMES = {
    AUTH_FAILED: 'AuthFailed',
  }
  // static navigator: NavigationContainerComponent

  // static setNavigator(navigateRef: NavigationContainerComponent | null) {
  //   if (navigateRef) {
  //     ServiceErrorHandler.navigator = navigateRef
  //   }
  // }

  static navigateTo(routeName: string, params?: object) {
    // if (ServiceErrorHandler.navigator && routeName) {
    //   ServiceErrorHandler.navigator.dispatch(
    //     // NavigationActions.navigate({routeName, params}),
    //   )
    // }
  }

  handleError(e: AxiosError): AxiosError | undefined {
    let response
    const status = _.get(e, 'response.status')

    switch (status) {
      // Whenever an API returns unauthorised status code, clear cache and navigate back to login
      case ServiceErrorHandler.STATUS.UNAUTHORISED:
        ServiceErrorHandler.navigateTo(
          ServiceErrorHandler.ROUTE_NAMES.AUTH_FAILED,
        )
        // stores.resetStore()
        break
      default:
        response = e
    }

    return response
  }
}

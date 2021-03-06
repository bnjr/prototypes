import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Amplify} from 'aws-amplify'

import {withAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import awsmobileDefault from '../aws-exports'
Amplify.configure(awsmobileDefault)

console.log({awsmobile: awsmobileDefault})

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
// export default withAuthenticator(MyApp);

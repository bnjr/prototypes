import {Auth} from 'aws-amplify'
import styles from '../styles/Home.module.css'
import {ChimeAPI} from '../services/chat/ChimeAPI'
import MessagingService from '../services/chat/MessagingService'

async function sessionStart() {
  try {
    const userInfo = await Auth.currentUserInfo()

    const creds = await Auth.currentCredentials()
    const chimeAPI = ChimeAPI.factory(creds)
    console.log({chimeAPI})

    const messagingService = MessagingService.factory(chimeAPI)
    messagingService.connect(userInfo.username)
  } catch (error) {
    console.log('error starting session:', error)
  }
}

async function sessionStop() {
  try {
    const creds = await Auth.currentCredentials()
    const chimeAPI = ChimeAPI.factory(creds)
    console.log({chimeAPI})

    const messagingService = MessagingService.factory(chimeAPI)
    messagingService.close()
  } catch (error) {
    console.log('error closing session:', error)
  }
}

const Messaging = () => {
  return (
    <div className={styles.card}>
      <p className={styles.description}>Message Session</p>
      <p className={styles.button}>
        <button
          onClick={(event) => {
            event.preventDefault()
            sessionStart()
          }}
        >
          Start Session
        </button>
      </p>
      <p className={styles.button}>
        <button
          onClick={(event) => {
            event.preventDefault()
            sessionStop()
          }}
        >
          Stop Session
        </button>
      </p>
    </div>
  )
}

export default Messaging

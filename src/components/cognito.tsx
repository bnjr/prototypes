import {Auth, ClientDevice} from 'aws-amplify'
import styles from '../styles/Home.module.css'
import {useState} from 'react'

const password = 'Password@123'

async function signUp(userName: string) {
  try {
    const client = ClientDevice.clientInfo()
    console.log({client})
    const response = await Auth.signUp({
      username: userName,
      password,
      attributes: {
        email: '', // optional
        phone_number: '', // optional - E.164 number convention
        'custom:profile_1': 'OWNER', // other custom attributes
      },
    })
    console.log(response)
  } catch (error) {
    console.error('error signing up:', error)
  }
}

async function login(userName: string) {
  try {
    const authUser = await Auth.signIn(userName, password)
    console.log({authUser})
  } catch (error) {
    console.error('error logging in:', error)
  }
}
async function signOut() {
  try {
    const authUser = await Auth.signOut()
    console.log({authUser})
  } catch (error) {
    console.error('error signing out:', error)
  }
}
const userInfo = async () => {
  try {
    const creds = await Auth.currentCredentials()
    console.log({creds})
    const credentials = Auth.essentialCredentials(creds)
    console.log({credentials})
    const devices = await Auth.fetchDevices()
    console.log({devices})
    const userInfo = await Auth.currentUserInfo()
    console.log({userInfo})
    const currentAuthenticatedUser = await Auth.currentAuthenticatedUser()
    console.log({currentAuthenticatedUser})
    const currentSession = await Auth.currentSession()
    console.log({currentSession})
    const {attributes} = currentAuthenticatedUser
    console.log({attributes})
  } catch (error) {
    console.error('error getting info:', error)
  }
}

const UserCreation = () => {
  const [userName, setUserName] = useState(process.env.NEXT_PUBLIC_EMAIL ? process.env.NEXT_PUBLIC_EMAIL : 'NOT_FOUND')

  return (
    <div className={styles.card}>
      <p className={styles.description}>User creation</p>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          signUp(userName)
        }}
      >
        <label>
          User Name:
          <input
            type='text'
            name='name'
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
      <p className={styles.button}>
        <button
          onClick={(event) => {
            event.preventDefault()
            login(userName)
          }}
        >
          Login
        </button>
      </p>
      <p className={styles.button}>
        <button
          onClick={(event) => {
            event.preventDefault()
            signOut()
          }}
        >
          Sign Out
        </button>
      </p>
      <p className={styles.button}>
        <button
          onClick={(event) => {
            event.preventDefault()
            userInfo()
          }}
        >
          Information
        </button>
      </p>
    </div>
  )
}

export default UserCreation

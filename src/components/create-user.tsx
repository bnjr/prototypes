import {Auth, ClientDevice} from 'aws-amplify'
import styles from '../styles/Home.module.css'
import {useState} from 'react'
import {User as LocalUser} from '../models/local'
import {Profile} from '../models/amplify'
import {AccountServiceImpl} from '../services'
import {v4} from 'uuid'

const password = 'R@nd0mP@ssw0rd'

async function signUpPhoneEmail(
  phone: string,
  email: string,
  setUserName: (userName: string) => void
) {
  try {
    // const accountService = new AccountServiceImpl()
    const profile = [Profile.OWNER, Profile.ASSOCIATE]
    // const newUser = new LocalUser({email, phone, profile})
    // const client = ClientDevice.clientInfo()
    // console.log({client})
    const response = await Auth.signUp({
      username: v4(),
      password: password,
      attributes: {
        email: email, // optional
        phone_number: phone, // optional - E.164 number convention
        profile: JSON.stringify(profile),
      },
    })

    // const response = await accountService.signUp(newUser, password)
    console.log(response)
    setUserName(response.userSub)
  } catch (error) {
    console.error('error signing up:', error)
  }
}

async function loginPhone(phone: string) {
  try {
    const authUser = await Auth.signIn(phone, password)
    console.log({authUser})
  } catch (error) {
    console.error('error logging in:', error)
  }
}

async function addEmail(email: string) {
  try {
    const user = await Auth.currentAuthenticatedUser()
    const responseUpdate = await Auth.updateUserAttributes(user, {
      email,
    })
    console.log({responseUpdate})
  } catch (error) {
    console.error('error adding email:', error)
  }
}

async function addPhone(phone: string) {
  try {
    const user = await Auth.currentAuthenticatedUser()
    const responseUpdate = await Auth.updateUserAttributes(user, {
      phone_number: phone,
    })
    console.log({responseUpdate})
  } catch (error) {
    console.error('error adding phone:', error)
  }
}

async function loginEmail(email: string) {
  try {
    const authUser = await Auth.signIn(email, password)
    console.log({authUser})
  } catch (error) {
    console.error('error logging in:', error)
  }
}
async function confirmEmailOtp(userName: string, emailOtp: string, email: string) {
  try {
    const userInfo = await Auth.currentUserInfo()
    if (userInfo) {
      // const user = await Auth.currentAuthenticatedUser()
      const responseUpdate = await Auth.verifyCurrentUserAttributeSubmit(
        'email',
        emailOtp
      )
      console.log({responseUpdate})
    } else {
      console.log({userName})
      const responseConfirm = await Auth.confirmSignUp(email, emailOtp)
      console.log({responseConfirm})
    }
  } catch (error) {
    console.error('error logging in:', error)
  }
}
async function confirmPhoneOtp(userName: string, phoneOtp: string, phone: string) {
  try {
    const userInfo = await Auth.currentUserInfo()
    if (userInfo) {
      // const user = await Auth.currentAuthenticatedUser()
      const responseUpdate = await Auth.verifyCurrentUserAttributeSubmit(
        'phone_number',
        phoneOtp
      )
      console.log({responseUpdate})
    } else {
      const responseConfirm = await Auth.confirmSignUp(phone, phoneOtp)
      console.log({responseConfirm})

    }
  } catch (error) {
    console.error('error logging in:', error)
  }
}

const CreateUser = () => {
  const [phone, setPhone] = useState('+919873145420')
  const [email, setEmail] = useState('sahil@mirpuri.in')
  const [emailOtp, setEmailOtp] = useState('')
  const [phoneOtp, setPhoneOtp] = useState('')
  const [userName, setUserName] = useState('')

  return (
    <div className={styles.card}>
      <p className={styles.description}>Create User</p>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          signUpPhoneEmail(phone, email, setUserName)
        }}
      >
        <label className={styles.label}>
          User Phone:
          <input
            type='text'
            name='phone'
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
            }}
          />
        </label>
        <br />
        <label className={styles.label}>
          User Email:
          <input
            type='text'
            name='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </label>
        <input type='submit' value='Create' />
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          confirmEmailOtp(userName, emailOtp, email)
        }}
      >
        <label className={styles.label}>
          Email Otp:
          <br />
          <input
            type='text'
            name='emailOtp'
            value={emailOtp}
            onChange={(e) => {
              setEmailOtp(e.target.value)
            }}
          />
        </label>
        <br />
        <input type='submit' value='Confirm Email' />
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          confirmPhoneOtp(userName, phoneOtp, phone)
        }}
      >
        <label className={styles.label}>
          Phone Otp:
          <br />
          <input
            type='text'
            name='phoneOtp'
            value={phoneOtp}
            onChange={(e) => {
              setPhoneOtp(e.target.value)
            }}
          />
        </label>
        <br />
        <input type='submit' value='Confirm Phone' />
      </form>
      <p className={styles.button}>
        <button
          onClick={(event) => {
            event.preventDefault()
            addEmail(email)
          }}
        >
          Add Email
        </button>
      </p>
      <p className={styles.button}>
        <button
          onClick={(event) => {
            event.preventDefault()
            addPhone(phone)
          }}
        >
          Add Phone
        </button>
      </p>
      <p className={styles.button}>
        <button
          onClick={(event) => {
            event.preventDefault()
            loginPhone(phone)
          }}
        >
          PhoneLogin
        </button>
      </p>

      <p className={styles.button}>
        <button
          onClick={(event) => {
            event.preventDefault()
            loginEmail(email)
          }}
        >
          EmailLogin
        </button>
      </p>
    </div>
  )
}

export default CreateUser

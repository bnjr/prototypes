import {Auth} from 'aws-amplify'
import styles from '../styles/Home.module.css'
import {useState} from 'react'

async function requestEmailOtp(email: string) {
  try {
    const user = await Auth.currentAuthenticatedUser()
    const responseUpdate = await Auth.updateUserAttributes(user, {
      email,
    })
    console.log({responseUpdate})
    const responseVerify = await Auth.verifyCurrentUserAttribute('email')
    console.log({responseVerify})
  } catch (error) {
    console.error('error request OTP:', error)
  }
}
async function confirmEmailOtp(code: string) {
  try {
    const response = await Auth.verifyCurrentUserAttributeSubmit('email', code)
    console.log({response})
  } catch (error) {
    console.error('error confirming email OTP:', error)
  }
}
const ContactConfirmation = () => {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')

  return (
    <div className={styles.card}>
      <p className={styles.description}>Contact Confirmation</p>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          requestEmailOtp(email)
        }}
      >
        <label>
          Email Identity:
          <input
            type='text'
            name='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </label>
        <input type='submit' value='confirm' />
      </form>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          confirmEmailOtp(code)
        }}
      >
        <label>
          Email OTP:
          <input
            type='text'
            name='OTP'
            value={code}
            onChange={(e) => {
              setCode(e.target.value)
            }}
          />
        </label>
        <input type='submit' value='confirm' />
      </form>
    </div>
  )
}

export default ContactConfirmation

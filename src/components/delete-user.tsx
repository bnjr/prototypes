import {API, Auth} from 'aws-amplify'
import styles from '../styles/Home.module.css'
import {Dispatch, SetStateAction, useState} from 'react'
import {AccountServiceImpl} from '../services'

import awsExports from '../aws-exports'

const apiName = awsExports.aws_cloud_logic_custom[0].name

async function getUser(
  emailPhone: string,
  setUserId: Dispatch<SetStateAction<string>>
) {
  try {
    const accountService = new AccountServiceImpl()
    const response = await accountService.getUserByPhoneOrEmail(emailPhone)
    if (response) setUserId(response?.id)
    console.log({response})
  } catch (error) {
    console.error('error getting user:', error)
  }
}

async function listUsers(groupName: string) {
  try {
    let path = '/listUsersInGroup'
    let myInit = {
      queryStringParameters: {
        groupname: groupName,
        limit: 10,
        // "token": nextToken
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    }
    const {NextToken, ...rest} = await API.get(apiName, path, myInit)
    // nextToken = NextToken;
    console.log({rest})
  } catch (error) {
    console.log('error get:', error)
  }
}

async function getUserInfo(userId: string) {
  const path = '/getUser'

  const myInitGet = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },

    // response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {
      username: userId,
    },
  }

  try {
    const response = await API.get(apiName, path, myInitGet)
    console.log('API.get:', response)
  } catch (error) {
    console.log('error get:', error)
  }
}

async function login() {
  try {
    const authUser = await Auth.signIn('sahil', 'R@nd0mP@ssw0rd')
    console.log({authUser})
  } catch (error) {
    console.error('error logging in:', error)
  }
}
const DeleteUser = () => {
  const [emailPhone, setEmailPhone] = useState('')
  const [userId, setUserId] = useState('')
  const [groupName, setGroupName] = useState('')

  return (
    <div className={styles.card}>
      <p className={styles.description}>User Deletion</p>
      <p className={styles.button}>
        <button
          onClick={(event) => {
            event.preventDefault()
            login()
          }}
        >
          Login
        </button>
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          getUser(emailPhone, setUserId)
        }}
      >
        <label>
          User Email/Phone:
          <input
            type='text'
            name='emailPhone'
            value={emailPhone}
            onChange={(e) => {
              setEmailPhone(e.target.value)
            }}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
      <p className={styles.button}>
        <button
          onClick={(event) => {
            event.preventDefault()
            getUserInfo(userId)
          }}
        >
          Get User Info
        </button>
      </p>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          listUsers(groupName)
        }}
      >
        <label>
          User for Group:
          <input
            type='text'
            name='groupName'
            value={groupName}
            onChange={(e) => {
              setGroupName(e.target.value)
            }}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default DeleteUser

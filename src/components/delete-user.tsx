import {API, Auth, DataStore} from 'aws-amplify'
import styles from '../styles/Home.module.css'
import {Dispatch, SetStateAction, useState} from 'react'
import {AccountServiceImpl} from '../services'
import {User} from '../models/amplify'
import {ChimeAPI} from '../services/chat/ChimeAPI'
import {getIdFromArn} from '../utils/usefulFunctions'

const apiName = 'AdminQueries' //awsmobile.aws_cloud_logic_custom[0].name

async function getUser(emailPhone: string): Promise<User | undefined> {
  try {
    const accountService = new AccountServiceImpl()
    const userDB = await DataStore.query(User)
    // const userDB = await accountService.getUserByPhoneOrEmail(emailPhone)
    if (userDB.length > 0) {
      return userDB[0]
    }
  } catch (error) {
    console.error('error getting user:', error)
  }
}

async function deleteUserDB(user: User): Promise<User[] | undefined> {
  try {
    const response = await DataStore.delete(User, user.id)
    if (response && response.length) {
      return response
    }
  } catch (error) {
    console.error('error getting user:', error)
  }
}

async function deleteUserChannels(
  user: User,
  setMessages: Dispatch<SetStateAction<string[]>>
) {
  const creds = await Auth.currentCredentials()
  const chimeAPI = ChimeAPI.factory(creds)

  try {
    const listResponse = await chimeAPI.listChannels(user.id)
    if (
      listResponse &&
      listResponse.ChannelMemberships &&
      listResponse.ChannelMemberships.length >> 0
    ) {
      console.log('listResponse:', listResponse)
      for (const channel of listResponse.ChannelMemberships) {
        const describeresponse = await chimeAPI.describeChannel(
          channel.ChannelSummary?.ChannelArn as string,
          user.id
        )
        console.log('describeresponse:', describeresponse)
        if (describeresponse) {
          const deleteResponse = await chimeAPI.deleteChannel(
            channel.ChannelSummary?.ChannelArn as string,
            getIdFromArn(describeresponse.Channel?.CreatedBy?.Arn as string)
          )
          if (deleteResponse) {
            setMessages((previous) => [...previous, 'Deleted channel'])
          } else {
            setMessages((previous) => [
              ...previous,
              'Error in deleting channel',
            ])
          }
        } else {
          setMessages((previous) => [...previous, 'Error in deleting channel'])
        }
      }
    }
  } catch (error) {
    console.error('error in deleting channels:', error)
  }
}

async function deleteAppInstance(user: User): Promise<any> {
  const creds = await Auth.currentCredentials()
  const chimeAPI = ChimeAPI.factory(creds)

  try {
    const deleteResponse = await chimeAPI.deleteAppUserInstance(user.id)
    if (deleteResponse) {
      return deleteResponse
    }
  } catch (error) {
    console.error('error deleting app instance user:', error)
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

async function disableUser(userId: string): Promise<any> {
  const path = '/disableUser'

  const myInit = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${(await Auth.currentSession())
        .getAccessToken()
        .getJwtToken()}`,
    },

    // response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    body: {
      username: userId,
    },
  }

  try {
    const response = await API.post(apiName, path, myInit)
    return response
  } catch (error) {
    console.log('error get:', error)
  }
}

async function listUser(
  emailPhone: string,
  setMessages: Dispatch<SetStateAction<string[]>>,
  setUserDB: Dispatch<SetStateAction<User | undefined>>
) {
  const creds = await Auth.currentCredentials()
  try {
    setMessages(() => ['Starting Get User'])
    const userDB = await getUser(emailPhone)
    setUserDB(userDB)
    if (userDB) {
      setMessages((previous) => [
        ...previous,
        'Got UserId' + userDB.username + userDB.phone + userDB.email,
      ])
    } else {
      setMessages((previous) => [...previous, 'error getting user id'])
    }
  } catch (error) {
    console.error('error listing user:', error)
  }
}

async function deleteUser(
  userDB: User | undefined,
  setMessages: Dispatch<SetStateAction<string[]>>
) {
  const creds = await Auth.currentCredentials()
  try {
    setMessages(() => ['Starting Deletion'])
    if (userDB) {
      setMessages((previous) => [
        ...previous,
        'Got UserId' + userDB.id + userDB.phone + userDB.email,
      ])
      const responseDisable = await disableUser(userDB.id)
      if (responseDisable) {
        // 1. Disable User
        setMessages((previous) => [...previous, 'Disabled user'])
        // 2. Delete User
        const responseDelete = await deleteUserDB(userDB)
        if (responseDelete) {
          setMessages((previous) => [...previous, 'Deleted user DB'])
          // 3. Delete Channel
          await deleteUserChannels(userDB, setMessages)
          // 4. Delete App Instance
          const deleteAppInsanceUserResponse = await deleteAppInstance(userDB)
          if (deleteAppInsanceUserResponse) {
            setMessages((previous) => [
              ...previous,
              'Deleted app user instance',
            ])
          } else {
            setMessages((previous) => [
              ...previous,
              'Error in deleting app user instance',
            ])
          }
        } else {
          setMessages((previous) => [...previous, 'Error deleting user DB'])
        }
      } else {
        setMessages((previous) => [...previous, 'Error disabling user'])
      }
    } else {
      setMessages((previous) => [...previous, 'error getting user id'])
    }
  } catch (error) {
    console.error('error deleting user:', error)
  }
}

function clearMessages(
  setDeleteMessages: Dispatch<SetStateAction<string[]>>,
  setListMessages: Dispatch<SetStateAction<string[]>>
) {
  setDeleteMessages(() => [])
  setListMessages(() => [])
}

const DeleteUser = () => {
  const [emailPhone, setEmailPhone] = useState('')
  const [userDB, setUserDB] = useState<User | undefined>()
  const [deleteMessages, setDeleteMessages] = useState(new Array<string>())
  const [listMessages, setListMessages] = useState(new Array<string>())

  return (
    <div className={styles.card}>
      <p className={styles.description}>Delete User</p>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          listUser(emailPhone, setListMessages, setUserDB)
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
        <input type='submit' value='Get User' />
      </form>
      <ListUser user={userDB} messages={listMessages} />
      {listMessages.length > 0 && (
        <button onClick={() => deleteUser(userDB, setDeleteMessages)}>
          Delete User
        </button>
      )}
      {(listMessages.length > 0 || deleteMessages.length > 0) && (
        <p className={styles.button}>
          <button
            onClick={() => clearMessages(setDeleteMessages, setListMessages)}
          >
            Clear Messages
          </button>
        </p>
      )}
      <DeleteStatus messages={deleteMessages} />
    </div>
  )
}

export default DeleteUser
type UserProps = {
  user: User | undefined
  messages: string[]
}
const ListUser = (props: UserProps) => {
  const {messages} = props

  return (
    <div>
      {messages.map((message, index) => {
        return <p key={index}>{message}</p>
      })}
    </div>
  )
}

type MessagesProps = {
  messages: string[]
}

const DeleteStatus = (props: MessagesProps) => {
  const {messages} = props

  return (
    <div>
      {messages.map((message, index) => {
        return <p key={index}>{message}</p>
      })}
    </div>
  )
}

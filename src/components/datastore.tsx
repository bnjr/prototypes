import {Amplify, Auth, DataStore} from "aws-amplify";
import awsExports from "../aws-exports";
import styles from '../styles/Home.module.css'
import {Dispatch, useState} from "react";
import {Chat, ChatUsers} from "../models";
Amplify.configure({...awsExports, ssr: true});

async function getData(setChats: Dispatch<Chat[] | undefined>, setChatUsers: Dispatch<ChatUsers[] | undefined>, filter: boolean) {
  try {
    let chatUsers: ChatUsers[] = [];
    if (filter) {
      const userId = '1454ef2a-edd5-4551-a5cf-5d89d8923d46'
      chatUsers = (await DataStore.query(ChatUsers)).filter((cu) => userId === cu.user.id)
    }
    else {
      chatUsers = (await DataStore.query(ChatUsers))
    }

    console.log({chatUsers})

    // Sort Array ChatID wise
    const sortedValues = chatUsers.sort((a, b) =>
      a.chat.id.localeCompare(b.chat.id),
    )

    // Get distinct ChatIDs
    const distinctChats = sortedValues.reduce((a, e) => {
      a[e.chat.id] = ++a[e.chat.id] || 0
      return a
    }, {})

    // const listOfChats: {chatId: string}[] = []
    // Object.entries(distinctChats).forEach(([k, v]) => {
    //   listOfChats.push({chatId: k})
    // })

    console.log({distinctChats})

    const chats = (await DataStore.query(Chat)).filter(async (c) => {
      console.log({c})
      if (distinctChats[c.id] >= 0) {
        return true
      }
    })

    chats.map(async (c) => {
      chatUsers = (await DataStore.query(ChatUsers)).filter((cu) => c.id === cu.chat.id)
    })

    setChats(chats)
    setChatUsers(chatUsers)

    console.log({chats})
  } catch (error) {
    console.log('error signing up:', error);
  }
}

const DataList = () => {
  const [chats, setChats] = useState<Chat[] | undefined>(undefined)
  const [chatUsers, setChatUsers] = useState<ChatUsers[] | undefined>(undefined)
  const [filter, setFilter] = useState<boolean>(false)
  return (
    <div className={styles.card}>
      <p className={styles.description}>
        Data Selection
      </p>

      <div>
        <input type="checkbox" id="filter" name="filter" onChange={() => setFilter(!filter)} />
        <label htmlFor="filter">Filter</label>
      </div>
      <button onClick={
        (event) => {
          event.preventDefault();
          getData(setChats, setChatUsers, filter);
        }
      }>
        Get Data
      </button>
      <button onClick={
        (event) => {
          event.preventDefault();
          setChats(undefined);
        }
      }>
        Clear Data
      </button>
      {chats && <>

        {chats.map((chat) => {
          return (
            <ul key={chat.id}>
              Chat Name: {chat.name}
              <table>
                <tbody>
                  <thead>
                    <tr>
                      <th scope="col">Participants</th>
                    </tr>
                  </thead>
                  {chatUsers && chatUsers.filter(cu => cu.chat.id === chat.id).map((chatUser) => {
                    return (
                      <tr key={chatUser.id}>
                        <td>{chatUser.user.firstName + ' ' + chatUser.user.lastName}</td>
                      </tr>
                    )
                  })}</tbody>
              </table>
            </ul>
          )
        })}
      </>
      }

    </div>
  )
}

export default DataList

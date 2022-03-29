import {Amplify, Auth} from "aws-amplify";
import awsExports from "../aws-exports";
import styles from '../styles/Home.module.css'
import {useState} from "react";
Amplify.configure({...awsExports, ssr: true});

async function signUp(userName: string) {
  try {
    const {user} = await Auth.signUp({
      username: userName,
      password: 'R@nd0mP@ssw0rd',
      attributes: {
        email: '',          // optional
        phone_number: '',   // optional - E.164 number convention
        // other custom attributes 
      }
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

const UserCreation = () => {
  const [userName, setUserName] = useState('')
  return (
    <div className={styles.card}>
      <p className={styles.description}>
        User creation
      </p>

      <form onSubmit={
        (event) => {
          event.preventDefault();
          signUp(userName);
        }
      }>
        <label>
          User Name:
          <input type="text" name="name" value={userName} onChange={(e) => {
            setUserName(e.target.value)
          }} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default UserCreation

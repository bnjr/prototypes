import styles from '../styles/Home.module.css'
import {Analytics, Auth} from 'aws-amplify'
import awsExports from '../aws-exports'
import {
  PinpointClient,
  SendMessagesCommandInput,
  SendMessagesCommand,
} from '@aws-sdk/client-pinpoint'

async function endpoint() {
  try {
    const response = await Analytics.updateEndpoint({
      address: process.env.NEXT_PUBLIC_EMAIL ? process.env.NEXT_PUBLIC_EMAIL : 'NOT_FOUND', // The unique identifier for the recipient. For example, an address could be a device token, email address, or mobile phone number.
      attributes: {
        // Custom attributes that your app reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create a segment.
        hobbies: ['piano', 'hiking'],
      },
      channelType: 'EMAIL', // The channel type. Valid values: APNS, GCM
      // demographic: {
      //   appVersion: 'xxxxxxx', // The version of the application associated with the endpoint.
      //   locale: 'xxxxxx', // The endpoint locale in the following format: The ISO 639-1 alpha-2 code, followed by an underscore, followed by an ISO 3166-1 alpha-2 value
      //   make: 'xxxxxx', // The manufacturer of the endpoint device, such as Apple or Samsung.
      //   model: 'xxxxxx', // The model name or number of the endpoint device, such as iPhone.
      //   modelVersion: 'xxxxxx', // The model version of the endpoint device.
      //   platform: 'xxxxxx', // The platform of the endpoint device, such as iOS or Android.
      //   platformVersion: 'xxxxxx', // The platform version of the endpoint device.
      //   timezone: 'xxxxxx', // The timezone of the endpoint. Specified as a tz database value, such as Americas/Los_Angeles.
      // },
      // location: {
      //   city: 'xxxxxx', // The city where the endpoint is located.
      //   country: 'xxxxxx', // The two-letter code for the country or region of the endpoint. Specified as an ISO 3166-1 alpha-2 code, such as "US" for the United States.
      //   latitude: 0, // The latitude of the endpoint location, rounded to one decimal place.
      //   longitude: 0, // The longitude of the endpoint location, rounded to one decimal place.
      //   postalCode: 'xxxxxx', // The postal code or zip code of the endpoint.
      //   region: 'xxxxxx', // The region of the endpoint location. For example, in the United States, this corresponds to a state.
      // },
      metrics: {
        // Custom metrics that your app reports to Amazon Pinpoint.
      },
      /** Indicates whether a user has opted out of receiving messages with one of the following values:
       * ALL - User has opted out of all messages.
       * NONE - Users has not opted out and receives all messages.
       */
      optOut: 'ALL',
      // Customized userId
      userId: process.env.NEXT_PUBLIC_EMAIL ? process.env.NEXT_PUBLIC_EMAIL : 'NOT_FOUND',
      // User attributes
      userAttributes: {
        interests: ['football', 'basketball', 'AWS'],
        // ...
      },
    })
    console.log({response})
  } catch (error) {
    console.error('error updating endpoint up:', error)
  }
}
async function sendEmail() {
  try {
    const creds = await Auth.currentCredentials()
    console.log({creds})

    const client = new PinpointClient({
      region: awsExports.aws_project_region,
      credentials: creds,
    })
    console.log({client})
    // The "From" address. This address has to be verified in Amazon Pinpoint
    // in the region that you use to send email.
    const senderAddress = process.env.PINPOINT_SENDER_EMAIL ? process.env.PINPOINT_SENDER_EMAIL : 'NOT_FOUND'

    // The address on the "To" line. If your Amazon Pinpoint account is in
    // the sandbox, this address also has to be verified.
    const toAddress = process.env.NEXT_PUBLIC_EMAIL ? process.env.NEXT_PUBLIC_EMAIL : 'NOT_FOUND'

    // The Amazon Pinpoint project/application ID to use when you send this message.
    // Make sure that the SMS channel is enabled for the project or application
    // that you choose.
    const appId = process.env.PINPOINT_APP_ID ? process.env.PINPOINT_APP_ID : 'NOT_FOUND'

    // The subject line of the email.
    const subject = 'Amazon Pinpoint (AWS SDK for JavaScript in Node.js)'

    // The email body for recipients with non-HTML email clients.
    const body_text = `Amazon Pinpoint Test (SDK for JavaScript in Node.js)
----------------------------------------------------
This email was sent with Amazon Pinpoint using the AWS SDK for JavaScript in Node.js.
For more information, see https:\/\/aws.amazon.com/sdk-for-node-js/`

    // The body of the email for recipients whose email clients support HTML content.
    const body_html = `<html>
<head></head>
<body>
  <h1>Amazon Pinpoint Test (SDK for JavaScript in Node.js)</h1>
  <p>This email was sent with
    <a href='https://aws.amazon.com/pinpoint/'>the Amazon Pinpoint API</a> using the
    <a href='https://aws.amazon.com/sdk-for-node-js/'>
      AWS SDK for JavaScript in Node.js</a>.</p>
</body>
</html>`

    // The character encoding the you want to use for the subject line and
    // message body of the email.
    const charset = 'UTF-8'
    const input: SendMessagesCommandInput = {
      ApplicationId: appId,
      MessageRequest: {
        Addresses: {
          [toAddress]: {
            ChannelType: 'EMAIL',
          },
        },
        MessageConfiguration: {
          EmailMessage: {
            FromAddress: senderAddress,
            SimpleEmail: {
              Subject: {
                Charset: charset,
                Data: subject,
              },
              HtmlPart: {
                Charset: charset,
                Data: body_html,
              },
              TextPart: {
                Charset: charset,
                Data: body_text,
              },
            },
          },
        },
      },
    }
    const command = new SendMessagesCommand(input)
    const response = await client.send(command)
    console.log({response})
  } catch (error) {
    console.log('error sending email:', error)
  }
}

const UserAnalytics = () => {
  return (
    <div className={styles.card}>
      <p className={styles.description}>Analytics/Pinpoint</p>

      <p className={styles.button}>
        <button
          onClick={(event) => {
            event.preventDefault()
            endpoint()
          }}
        >
          Endpoint
        </button>
      </p>

      <p className={styles.button}>
        <button
          onClick={(event) => {
            event.preventDefault()
            sendEmail()
          }}
        >
          Send Email
        </button>
      </p>
    </div>
  )
}

export default UserAnalytics

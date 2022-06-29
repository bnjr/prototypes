import {DataStore} from 'aws-amplify'
import styles from '../styles/Home.module.css'
import {Dispatch, SetStateAction, useState} from 'react'
import {ServiceDefinition} from '../models'
import {Language} from '../models/amplify'
type LocalServiceDefinition = {
  id: string
  serviceName: string
  language: string
  iconName: string
}

const uploadFile = async (
  file: File,
  setArray: Dispatch<SetStateAction<(LocalServiceDefinition | undefined)[]>>
) => {
  const fileReader = new FileReader()
  if (file) {
    fileReader.onload = function (event) {
      const text = event.target?.result
      if (text) csvFileToArray(text as string, setArray)
    }

    fileReader.readAsText(file)
  }
}

const csvFileToArray = (
  fileContent: string,
  setArray: Dispatch<SetStateAction<(LocalServiceDefinition | undefined)[]>>
) => {
  const csvHeader = fileContent.slice(0, fileContent.indexOf('\n')).split(',')
  const csvRows = fileContent
    .slice(fileContent.indexOf('\n') + 1)
    .split(/\r\n|\n|\r/g)

  const array = csvRows.map((i) => {
    const values = i.split(',')
    const obj = csvHeader.reduce((object, header, index) => {
      object[header.trim() as keyof LocalServiceDefinition] = values[index]
      return object
    }, {} as LocalServiceDefinition)
    if (obj.id && obj.id !== '') return obj
    // return obj
  })

  setArray(array)
}

const uploadData = async (
  data: (LocalServiceDefinition | undefined)[],
  setCount: Dispatch<SetStateAction<number>>
) => {
  setCount(0)
  data.forEach(async (element) => {
    if (element) {
      const serviceDefinition = new ServiceDefinition({
        serviceName: element.serviceName,
        language: element.language as unknown as Language,
        iconName: element.iconName,
      })
      console.log({element, serviceDefinition})
      try {
        // const dataStore = await DataStore.save(
        //   new ServiceDefinition(serviceDefinition)
        // )
        setCount((count) => count + 1)
      } catch (error) {
        console.error('Could not save data', error)
      }
    }
  })
}

const UploadServiceDefinitions = () => {
  const [file, setFile] = useState<File>()
  const [array, setArray] = useState<(LocalServiceDefinition | undefined)[]>([])
  const headerKeys = Object.keys(Object.assign({}, ...array))
  const [count, setCount] = useState(0)
  return (
    <div className={styles.card}>
      <p className={styles.description}>Data Selection</p>
      <form>
        <div>
          <label htmlFor='serviceDefinition'>Service Definition File</label>
          <input
            type='file'
            id='serviceDefinition'
            name='serviceDefinition'
            accept='.csv'
            onChange={(e) => {
              if (e.target.files) setFile(e.target.files[0])
            }}
          />
        </div>
        <button
          onClick={(event) => {
            event.preventDefault()
            file ? uploadFile(file, setArray) : {}
          }}
        >
          Get Data
        </button>
      </form>
      <button
        onClick={(event) => {
          event.preventDefault()
          setArray([])
          setFile(undefined)
          setCount(0)
        }}
      >
        Clear Data
      </button>
      <button
        onClick={(event) => {
          event.preventDefault()
          uploadData(array, setCount)
        }}
      >
        Upload Data
      </button>
      {array.length > 0 && (
        <div className={styles.description}>
          Read {array.length} rows of data
        </div>
      )}
      {array.length > 0 && (
        <div className={styles.description}>
          Uploaded {count}/{array.length}
        </div>
      )}
    </div>
  )
}

export default UploadServiceDefinitions

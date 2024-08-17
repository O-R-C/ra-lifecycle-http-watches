import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import FormAdd from '../FormAdd/FormAdd'
import Watches from '../Watches/Watches'
import styles from './WatchManager.module.css'

export default function WatchManager() {
  const [watches, setWatches] = useState([])

  const handleSubmit = ({ title, timeZone }) => {
    setWatches([...watches, { id: uuidv4(), title, timeZone }])
    console.log(watches)
  }

  const handleDelete = (id) => {
    setWatches(watches.filter((watch) => watch.id !== id))
  }

  return (
    <div className={styles.WatchManager}>
      <FormAdd onSubmit={handleSubmit} />
      <Watches
        watches={watches}
        onDelete={handleDelete}
      />
    </div>
  )
}

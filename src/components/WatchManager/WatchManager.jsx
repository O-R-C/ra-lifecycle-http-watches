import styles from './WatchManager.module.css'
import FormAdd from '../FormAdd/FormAdd'

export default function WatchManager() {
  const handleSubmit = ({ title, timeZone }) => {
    console.log({ title, timeZone })
  }
  return (
    <div className={styles.WatchManager}>
      <FormAdd onSubmit={handleSubmit} />
    </div>
  )
}

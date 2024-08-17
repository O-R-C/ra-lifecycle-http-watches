import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import getTime from './getTime'
import styles from './Watch.module.css'

export default function Watch({ id, title, timeZone }) {
  const currentTime = getTime.bind(null, timeZone)
  const [time, setTime] = useState(currentTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currentTime())
      console.log(time)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div className={styles.watchContainer}>
      <div className={styles.controls}>
        <h2>{title}</h2>
        <button
          data-id={id}
          onClick={() => setTime(currentTime())}
        >
          X
        </button>
      </div>
      <div className={styles.time}>{time}</div>
    </div>
  )
}

Watch.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timeZone: PropTypes.string.isRequired,
}

import PropTypes from 'prop-types'
import getDegrees from './getDegrees'
import styles from './ClockHands.module.css'

export default function ClockHands({ time }) {
  const [hours, minutes, seconds, milliseconds] = time.split(':')

  return (
    <div className={styles.clockHands}>
      <div
        className={`${styles.hour} ${styles.hand}`}
        style={{ transform: `rotate(${getDegrees({ time: hours, offset: minutes }, 'hours')}deg)` }}
      />
      <div
        className={`${styles.minute} ${styles.hand}`}
        style={{ transform: `rotate(${getDegrees({ time: minutes, offset: seconds }, 'minutes')}deg)` }}
      />
      <div
        className={`${styles.second} ${styles.hand}`}
        style={{ transform: `rotate(${getDegrees({ time: seconds, offset: milliseconds }, 'seconds')}deg)` }}
      />
    </div>
  )
}

ClockHands.propTypes = {
  time: PropTypes.object.isRequired,
}

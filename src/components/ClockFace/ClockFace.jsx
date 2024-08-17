import PropTypes from 'prop-types'
import hoursLabels from './hours'
import ClockHands from '../ClockHands/ClockHands'
import getCoords from './getCoords'

import styles from './ClockFace.module.css'

export default function ClockFace({ time }) {
  return (
    <div className={styles.clockFace}>
      {hoursLabels.map((label, index) => {
        const { x, y } = getCoords(index * 30)

        return (
          <div
            key={label}
            className={styles.hour}
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            {label}
          </div>
        )
      })}

      <ClockHands time={time} />
      <div className={styles.center} />
      <div className={styles.centerDot} />
    </div>
  )
}

ClockFace.propTypes = {
  time: PropTypes.string.isRequired,
}

import PropTypes from 'prop-types'
import Watch from '../Watch/Watch'
import styles from './Watches.module.css'

export default function Watches({ watches, onDelete }) {
  const handleDelete = (evt) => {
    evt.preventDefault()

    const id = evt.target.dataset.id
    if (!id) return

    onDelete(id)
  }

  return (
    <div
      className={styles.watches}
      onClick={handleDelete}
    >
      {watches.map((watch) => (
        <Watch
          key={watch.id}
          {...watch}
        />
      ))}
    </div>
  )
}

Watches.propTypes = {
  watches: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}

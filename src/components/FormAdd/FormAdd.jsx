import PropTypes from 'prop-types'
import { useRef } from 'react'
import styles from './FormAdd.module.css'

export default function FormAdd({ onSubmit }) {
  const titleRef = useRef(null)
  const timeZoneRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmit({ title: titleRef.current.value, timeZone: timeZoneRef.current.value })

    resetForm()
  }

  const resetForm = () => {
    titleRef.current.value = ''
    timeZoneRef.current.value = ''
  }

  return (
    <form
      className={styles.formAdd}
      onSubmit={handleSubmit}
    >
      <label>
        Название
        <input
          type='text'
          name='title'
          ref={titleRef}
          required
        />
      </label>
      <label>
        Часовой пояс
        <input
          type='number'
          name='timeZone'
          ref={timeZoneRef}
          min={0}
          required
        />
      </label>
      <button type='submit'>Добавить</button>
    </form>
  )
}

FormAdd.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

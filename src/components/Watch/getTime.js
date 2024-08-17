import moment from 'moment'

const getTime = (timeZone) => {
  return moment.utc().add(timeZone, 'h').format('HH:mm:ss:SSS')
}

export default getTime

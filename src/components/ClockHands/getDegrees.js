const getDegrees = ({ time, offset }, type) => {
  const degreesBetween = type === 'hours' ? 30 : 6
  const offsetDeg = type === 'seconds' ? offset / 1000 : offset / 60

  return degreesBetween * (Number(time) + Number(offsetDeg)) - 90
}

export default getDegrees

const getCoords = (angle, radius = 83) => {
  const offset = angle - 90
  const x = Math.cos((offset * Math.PI) / 180) * radius
  const y = Math.sin((offset * Math.PI) / 180) * radius

  return { x, y }
}

export default getCoords

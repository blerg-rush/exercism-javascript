export const value = (colorArray) =>
  parseInt(`${COLORS.indexOf(colorArray[0])}${COLORS.indexOf(colorArray[1])}`)

export const COLORS = [
  'black', 'brown', 'red', 'orange', 'yellow',
  'green', 'blue', 'violet', 'grey', 'white'
]

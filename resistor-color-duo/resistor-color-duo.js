export const value = ([firstColor, secondColor]) =>
  parseInt(`${COLORS.indexOf(firstColor)}${COLORS.indexOf(secondColor)}`)

export const COLORS = [
  'black', 'brown', 'red', 'orange', 'yellow',
  'green', 'blue', 'violet', 'grey', 'white'
]

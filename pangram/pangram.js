export const isPangram = (string) => {
  const uniqueLetters = new Set(string.toLowerCase().match(/[a-z]/g))
  return uniqueLetters.size === 26
}

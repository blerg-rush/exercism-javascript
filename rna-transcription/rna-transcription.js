const DNA_COMPLEMENETS = { 'G': 'C',
                           'C': 'G',
                           'T': 'A',
                           'A': 'U' }

export const toRna = (sequence) => {
  return sequence.split('').map(nucleotide => {
    return DNA_COMPLEMENETS[nucleotide]
  }).join('')
}

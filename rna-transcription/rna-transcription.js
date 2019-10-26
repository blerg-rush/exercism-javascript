const dnaComplements = { 'G': 'C',
                         'C': 'G',
                         'T': 'A',
                         'A': 'U' }

export const toRna = (sequence) => {
  let rna = ''
  for (let nucleotide of sequence) {
    rna += dnaComplements[nucleotide]
  }
  return rna
}

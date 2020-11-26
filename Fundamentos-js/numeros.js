const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log('01)',Number.isInteger(peso1))
console.log('02)',Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log('03)',media.toFixed(2))
console.log('04)',media.toString(2)) // em binário
console.log('05)',typeof media)
console.log('06)',typeof Number)
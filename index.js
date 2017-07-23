const fizzBuzz = require('./src/fizz-buzz')

const { terms, matchings } = fizzBuzz(20)
const { fizz, buzz, fizzbuzz, lucky, integer } = matchings

// Could use a loop for this, but Object.keys doesn't guarantee order, if I recall correct. But for now, this is fine.
const matchingsOutput = `fizz: ${fizz}\nbuzz: ${buzz}\nfizzbuzz: ${fizzbuzz}\nlucky: ${lucky}\ninteger: ${integer}`
const programResponse = `${terms}\n${matchingsOutput}`

console.log(programResponse)

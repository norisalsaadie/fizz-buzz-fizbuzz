const nanomist = require('nanomist')
const fizzBuzz = require('./src/fizz-buzz')

const flags = nanomist(process.argv.slice(2))
const range = parseInt(flags.range) || 20
const { terms, matchings } = fizzBuzz(range)
const { fizz, buzz, fizzbuzz, lucky, integer } = matchings

// Could use a loop for this, but Object.keys doesn't guarantee order, if I recall correct. But for now, this is fine.
const matchingsOutput = `fizz: ${fizz}\nbuzz: ${buzz}\nfizzbuzz: ${fizzbuzz}\nlucky: ${lucky}\ninteger: ${integer}`
const programResponse = `${terms}\n${matchingsOutput}`

console.log(programResponse)

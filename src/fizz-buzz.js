// If there were more cases then I would opt-in for a switch.
function generateTerm(number) {
  // In all causes, return a key:value to easily update matchings
  if (`${number}`.indexOf('3') > -1) {
    return { value: 'lucky', name: 'lucky' }
  }
  if (number % 15 === 0) {
    return { value: 'fizzbuzz', name: 'fizzbuzz' }
  }
  if (number % 3 === 0) {
    return { value: 'fizz', name: 'fizz' }
  }
  if (number % 5 === 0) {
    return { value: 'buzz', name: 'buzz' }
  }

  return { value: number, name: 'integer' }

}

// This could be performed in a more functional manner but I will stay away from FP for this exercise.
// If we wanted to, then we simply need to create an array of range > 0 || 0 and .map over it calling generateTerm.
// Since I don't have much context about my who will adopt this code then I will stick to more standard JS.
module.exports = function (range) {
  const iterations = parseInt(range) || 0;
  const matchings = { fizz: 0, buzz: 0, fizzbuzz: 0, lucky: 0, integer: 0 }
  let terms = []

  for (let i = 1; i <= iterations; i++) {
    const { value, name } = generateTerm(i)
    matchings[name] = matchings[name] + 1
    terms.push(value)
  }

  return { terms: terms.join(' '), matchings }
}

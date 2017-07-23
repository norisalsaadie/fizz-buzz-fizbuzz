// If there were more cases then I would opt-in for a switch.
function generateTerm(number) {
  if (`${number}`.indexOf('3') > -1) {
    return 'lucky'
  }
  if (number % 15 === 0) {
    return 'fizzbuzz'
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz'
  }
  return number
}

// This could be performed in a more functional manner but I will stay away from FP for this exercise.
// If we wanted to, then we simply need to create an array of range > 0 || 0 and .map over it calling generateTerm.
// Since I don't have much context about my who will adopt this code then I will stick to more standard JS.
module.exports = function (range) {
  const iterations = parseInt(range) || 0;
  let output = []
  for (let i = 1; i <= iterations; i++) {
    const term = generateTerm(i)
    output.push(term)
  }
  return output.join(' ')
}

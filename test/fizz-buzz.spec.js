const { test } = require('ava')
const fizzBuzz = require('../src/fizz-buzz')

test('it should return the expected output for range 1-20', t => {
  const expectedTermsOutput = '1 2 lucky 4 buzz fizz 7 8 fizz buzz 11 fizz lucky 14 fizzbuzz 16 17 fizz 19 buzz'
  const { terms, matchings } = fizzBuzz(20)
  t.is(expectedTermsOutput, terms)
  t.is(4, matchings.fizz)
  t.is(3, matchings.buzz)
  t.is(1, matchings.fizzbuzz)
  t.is(2, matchings.lucky)
  t.is(10, matchings.integer)
})

test('it should return the expected output for range 1-23', t => {
  const expectedTermsOutput = '1 2 lucky 4 buzz fizz 7 8 fizz buzz 11 fizz lucky 14 fizzbuzz 16 17 fizz 19 buzz fizz 22 lucky'
  const { terms, matchings } = fizzBuzz(23)
  t.is(expectedTermsOutput, terms)
  t.is(5, matchings.fizz)
  t.is(3, matchings.buzz)
  t.is(1, matchings.fizzbuzz)
  t.is(3, matchings.lucky)
  t.is(11, matchings.integer)
})

test('it return an empty output if the range is not a valid integer', t => {
  const expectedTermsOutput = ''
  const { terms, matchings } = fizzBuzz('aa')
  t.is(expectedTermsOutput, terms)
  t.is(0, matchings.fizz)
  t.is(0, matchings.buzz)
  t.is(0, matchings.fizzbuzz)
  t.is(0, matchings.lucky)
  t.is(0, matchings.integer)
})

test('it return an empty output if range is less than 0', t => {
  const expectedTermsOutput = ''
  const { terms, matchings } = fizzBuzz(-10)
  t.is(expectedTermsOutput, expectedTermsOutput)
  t.is(0, matchings.fizz)
  t.is(0, matchings.buzz)
  t.is(0, matchings.fizzbuzz)
  t.is(0, matchings.lucky)
  t.is(0, matchings.integer)
})

test('it return an empty output if range is less than 0 and parsed as a string', t => {
  const expectedTermsOutput = ''
  const { terms, matchings } = fizzBuzz('-10')
  t.is(expectedTermsOutput, terms)
  t.is(0, matchings.fizz)
  t.is(0, matchings.buzz)
  t.is(0, matchings.fizzbuzz)
  t.is(0, matchings.lucky)
  t.is(0, matchings.integer)
})

const { test } = require('ava')
const fizzBuzz = require('../src/fizz-buzz')

test('it should return the expected output for range 1-20', t => {
  const expected = '1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz'
  const output = fizzBuzz(20)
  t.is(expected, output)
})

test('it should return the expected output for range 1-21', t => {
  const expected = '1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz fizz'
  const output = fizzBuzz(21)
  t.is(expected, output)
})

test('it return an empty output if the range is not a valid integer', t => {
  const expected = ''
  const output = fizzBuzz('aa')
  t.is(expected, output)
})

test('it return an empty output if range is less than 0', t => {
  const expected = ''
  const output = fizzBuzz(-10)
  t.is(expected, output)
})

test('it return an empty output if range is less than 0 and parsed as a string', t => {
  const expected = ''
  const output = fizzBuzz('-10')
  t.is(expected, output)
})

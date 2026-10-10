import { divide } from '../src/calculator.js'

describe('divide function', () => {
  test('divides two valid numbers correctly', () => {
    expect(divide(6, 2)).toBe(3)
  })

  test('throws TypeError if the first argument is a string', () => {
    expect(() => divide("a", 2)).toThrow(TypeError)
    expect(() => divide("a", 2)).toThrow("Both arguments must be numbers")
  })

  test('throws TypeError if the second argument is a string', () => {
    expect(() => divide(2, "b")).toThrow(TypeError)
    expect(() => divide(2, "b")).toThrow("Both arguments must be numbers")
  })

  test('throws TypeError if an argument is NaN', () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError)
    expect(() => divide(NaN, 2)).toThrow("Arguments cannot be NaN")
  })

  test('throws RangeError when attempting to divide by zero', () => {
    expect(() => divide(6, 0)).toThrow(RangeError)
    expect(() => divide(6, 0)).toThrow("Division by zero is not allowed")
  })
})
const validUtf8 = require('../src/utf-8-validation')

describe('utf-8 validation', () => {
  it('1', () => {
    expect(validUtf8([197, 130, 1])).toBe(true)
  })

  it('2', () => {
    expect(validUtf8([235, 140, 4])).toBe(false)
  })

  it('1', () => {
    expect(validUtf8([255])).toBe(false)
  })

  it('1', () => {
    expect(validUtf8([115, 100, 102, 231, 154, 132, 13, 10])).toBe(true)
  })
})

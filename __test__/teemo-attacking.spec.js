const findPoisonedDuration = require('../src/teemo-attacking')

describe('teemo-attacking', () => {
  it('1', () => {
    expect(findPoisonedDuration([1,4], 2)).toBe(4)
    expect(findPoisonedDuration([1,2], 2)).toBe(3)
  })

  it('2', () => {
    const arr = Array(501).fill().map((_, i) => i)
    expect(findPoisonedDuration(arr, 1)).toBe(501)
  })
})


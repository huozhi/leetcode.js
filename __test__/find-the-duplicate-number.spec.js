const findDuplicate = require('../src/find-the-duplicate-number')

describe('find-the-duplicate-number', () => {
  it('1', () => {
    expect(findDuplicate([1,1])).toBe(1)
    expect(findDuplicate([1,2,3,4,4,5,6])).toBe(4)
  })
})

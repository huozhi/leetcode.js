const findDisappearedNumbers = require('../src/find-all-numbers-disappeared-in-an-array')

describe('find-all-numbers-disappeared-in-an-array', () => {
  it('1', () => {
    expect(findDisappearedNumbers([4,3,2,7,8,2,3,1])).toEqual([5,6])
    expect(findDisappearedNumbers([1,1])).toEqual([2])
  })
})

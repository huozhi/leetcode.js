const threeSum = require('../src/3sum')

describe('3sum', () => {
  it('1', () => {
    expect(threeSum([-1,0,1,2,-1,-4])).toEqual([[-1, 0, 1], [-1, -1, 2]])
    expect(threeSum([0,0,0,0,0]).toEqual([0, 0, 0]))
    expect(threeSum([-2,0,1,1,2]).toEqual([[-2, 0, 2], [-2, 1, 1]]))
  })
})

const NumArray = require('../src/range-sum-query-mutable')

describe('range-sum-query-mutable', () => {
  it('1', () => {
    const na = new NumArray([1,3,5])
    expect(na.sumRange(0, 2)).toBe(9)
    na.update(1, 2)
    expect(na.sumRange(0, 2)).toBe(8)
  })

  it('2', () => {
    const na = new NumArray([0,9,5,7,3])
    expect(na.sumRange(4, 4)).toBe(3)
    expect(na.sumRange(2, 4)).toBe(15)
    expect(na.sumRange(3, 3)).toBe(7)
    na.update(4, 5)
    na.update(1, 7)
    na.update(0, 8)
    expect(na.sumRange(1, 2)).toBe(12)
    na.update(1, 9)
    expect(na.sumRange(4, 4)).toBe(5)
    na.update(3, 4)
  })
})

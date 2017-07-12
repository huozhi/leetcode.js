const canPartition = require('../src/partition-equal-subset-sum')

describe('partition-equal-subset-sum', () => {
  it('1', () => {
    expect(canPartition([1, 5, 11, 5])).toBe(true)
    expect(canPartition([1, 2, 3, 5])).toBe(false)
  })

  it('2', () => {
    // large test case existed, so DFS solution cannot pass the OJ
    expect(canPartition(
      [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,100
      ]
    )).toBe(false)
  })
})

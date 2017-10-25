const findRedundantConnection = require('../src/redundant-connection')

describe('redudant-connection', () => {
  it('1', () => {
    expect(findRedundantConnection([[1, 2], [1, 3], [2, 3]])).toEqual([2, 3])
    expect(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]])).toEqual([1, 4])
    expect(findRedundantConnection([[1, 5], [3, 4], [3, 5], [4, 5], [2, 4]])).toEqual([4, 5])
  })
})

const {expect} = require('chai')
const {searchMatrix} = require('../src/search-a-2d-matrix')

describe('search a 2d matrix', () => {
  it('1', () => {
    const m = [
      [1,   3,  5,  7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ]
    expect(searchMatrix(m, 3)).to.equal(true)
  })

  it('2', () => {
    const m = [[1]]
    expect(searchMatrix(m, 0)).to.equal(false)
  })
})

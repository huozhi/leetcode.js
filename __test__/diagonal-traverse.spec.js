const findDiagonalOrder = require('../src/diagonal-traverse')

describe('diagonal-traverse', () => {
  it('1', () => {
    expect(findDiagonalOrder([[2,5,8],[4,0,-1]]))
      .toEqual([2, 5, 4, 0, 8, -1])
  })
  
  it('2', () => {
    expect(
      findDiagonalOrder([
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ]
      ])
    ).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9])
  })
})


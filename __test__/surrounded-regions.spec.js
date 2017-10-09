const solve = require('../src/surrounded-regions')

const buildCharBoard = (board) => board.map(str => str.split(''))

describe('surrounded-regions', () => {
  it('1', () => {
    const src = buildCharBoard(['XXXX','XOOX','XXOX','XOXX'])
    const dist = buildCharBoard(['XXXX','XXXX','XXXX','XOXX'])
    solve(src)
    expect(src).toEqual(dist)
  })

  it('2: corner cases', () => {
    let src = buildCharBoard(['O'])
    let dist = buildCharBoard(['O'])
    solve(src)
    expect(src).toEqual(dist)

    src = []
    dist = []
    solve(src)
    expect(src).toEqual(dist)
  })
})

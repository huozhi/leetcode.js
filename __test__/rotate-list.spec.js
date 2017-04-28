const LinkedList = require('../utils/linked-list')
const rotateRight = require('../src/rotate-list')

describe('rotate list', () => {
  it('1', () => {
    const list = new LinkedList().fromArray([1, 2, 3, 4, 5])
    const result = new LinkedList().fromArray([4, 5, 1, 2, 3])
    expect(rotateRight(list, 2)).toEqual(result)
  })

  it('2', () => {
    const list = new LinkedList().fromArray([])
    expect(rotateRight(list, 0)).toEqual(list)
  })
})

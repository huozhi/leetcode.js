const LinkedList = require('../utils/linked-list')
const swapPairs = require('../src/swap-nodes-in-pairs')

describe('swap-nodes-in-pairs', () => {
  it('1', () => {
    const l = LinkedList.fromArray([1])
    expect(LinkedList.toArray(swapPairs(l))).toEqual([1])
  })

  it('2', () => {
    const l = LinkedList.fromArray([1, 2, 3])
    expect(LinkedList.toArray(swapPairs(l))).toEqual([2, 1, 3])
  })

  it('3', () => {
    const l = LinkedList.fromArray([1, 2, 3, 4])
    expect(LinkedList.toArray(swapPairs(l))).toEqual([2, 1, 4, 3])
  })
})

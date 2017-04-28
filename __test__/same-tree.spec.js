const BinaryTree = require('../utils/binary-tree')
const isSameTree = require('../src/same-tree')

describe('same tree', () => {
  it('1', () => {
    // [10, 15, null, null, 15]
    // need build tree from array contains null
    const p = new BinaryTree().fromArray([10, 5, 15])
    const q = new BinaryTree().fromArray([10, 15, -1, -1, 15])
    expect(isSameTree(p, q)).toBe(false)
  })

  it('2', () => {
    const p = new BinaryTree().fromArray([1, 2, 3])
    const q = new BinaryTree().fromArray([1, 2, 3])
    expect(isSameTree(p, q)).toBe(true)
  })
})

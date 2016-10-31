const {expect} = require('chai')
const {isSameTree} = require('../src/same-tree')
const BinaryTree = require('../lib/binary-tree')

describe('same tree', () => {
  it('1', () => {
    // [10, 15, null, null, 15]
    // need build tree from array contains null
    const p = new BinaryTree().formArray([10, 5, 15])
    const q = new BinaryTree().formArray([10, 15, -1, -1, 15])
    expect(isSameTree(p, q)).equal(false)
  })

  it('2', () => {
    const p = new BinaryTree().formArray([1, 2, 3])
    const q = new BinaryTree().formArray([1, 2, 3])
    expect(isSameTree(p, q)).equal(true)
  })
})

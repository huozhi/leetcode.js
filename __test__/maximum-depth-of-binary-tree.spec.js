const {expect} = require('chai')
const {maxDepth} = require('../src/maximum-depth-of-binary-tree')
const BinaryTree = require('../lib/binary-tree')

describe('maximum depth of binary tree', () => {
  it('1', () => {
    const array = [3, 1, 5, 2, 4]
    const tree = new BinaryTree()
    tree.formArray(array)
    expect(maxDepth(tree.root)).to.equal(3)
  })
})

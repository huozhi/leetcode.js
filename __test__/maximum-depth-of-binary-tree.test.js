import {expect} from 'chai'
import {maxDepth} from '../src/maximum-depth-of-binary-tree'
import {BinaryTree} from '../lib/binary-tree'


describe('maximum depth of binary tree', () => {
  it('1', () => {
    const array = [3, 1, 5, 2, 4]
    const tree = new BinaryTree()
    tree.buildFromArray(array)
    expect(maxDepth(tree1.root)).to.equal(3)
  })
})

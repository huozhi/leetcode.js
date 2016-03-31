import {expect} from 'chai'
import {wordPattern} from '../src/maximum-depth-of-binary-tree'
import {BinaryTree} from '../lib/binary-tree'


describe('maximum depth of binary tree', () => {
  it('1', () => {
    const array = [3, 1, 5, 2, 4]
    const root = new BinaryTree()
    root.buildFromArray(array)
    expect(root.inorder()).to.eql([1, 2, 3, 4, 5]) // deep equal
  })
})

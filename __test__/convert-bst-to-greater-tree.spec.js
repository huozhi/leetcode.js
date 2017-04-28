const BinaryTree = require('../utils/binary-tree')
const convertBST = require('../src/convert-bst-to-greater-tree')

describe('convert-bst-to-greater-tree', () => {
  it('1', () => {
    const gtree = convertBST(BinaryTree.fromArray([5, 2, 13]))
    expect(BinaryTree.toArray(gtree)).toEqual([18,20,13])
  })

  it('2', () => {
    const gtree = convertBST(BinaryTree.fromArray([2,0,3,-4,1]))
    expect(BinaryTree.toArray(gtree).sort()).toEqual([5,6,3,2,6].sort())
  })

  it('3', () => {
    const gtree = convertBST(BinaryTree.fromArray([1,0,4,-2,null,3]))
    expect(BinaryTree.toArray(gtree).sort()).toEqual([8,8,4,6,7].sort())
  })
})

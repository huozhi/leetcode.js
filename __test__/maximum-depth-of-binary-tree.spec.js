'use strict'

const expect = require('chai').expect
const maxDepth = require('../src/maximum-depth-of-binary-tree').maxDepth
const BinaryTree = require('../lib/binary-tree').BinaryTree


describe('maximum depth of binary tree', () => {
  it('1', () => {
    const array = [3, 1, 5, 2, 4]
    const tree = new BinaryTree()
    tree.buildFromArray(array)
    expect(maxDepth(tree.root)).to.equal(3)
  })
})

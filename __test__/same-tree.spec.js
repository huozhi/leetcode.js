'use strict'

const expect = require('chai').expect
const isSameTree = require('../src/same-tree').isSameTree
const BinaryTree = require('../lib/binary-tree').BinaryTree

describe('same tree', () => {
  it('1', () => {
    let p = new BinaryTree(), q = new BinaryTree()
    // [10, 15, null, null, 15]
    // need build tree from array contains null
    p = p.buildFromArray([10, 5, 15])
    q = q.buildFromArray([10, 15, -1, -1, 15])
    expect(isSameTree(p, q)).equal(false)
  })

  it('2', () => {
    let p = new BinaryTree(), q = new BinaryTree()
    p = p.buildFromArray([1, 2, 3])
    q = q.buildFromArray([1, 2, 3])
    expect(isSameTree(p, q)).equal(true)
  })
})

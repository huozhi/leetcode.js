const {expect} = require('chai')
const {LinkedList, forEachNode} = require('../lib/linked-list')
const {rotateRight} = require('../src/rotate-list')

describe('rotate list', () => {
  it ('1', () => {
    const list = new LinkedList().formArray([1, 2, 3, 4, 5])
    const result = new LinkedList().formArray([4, 5, 1, 2, 3])
    expect(rotateRight(list, 2)).to.eql(result)
  })

  it ('2', () => {
    const list = new LinkedList().formArray([])
    expect(rotateRight(list, 0)).to.eql(list)
  })
})

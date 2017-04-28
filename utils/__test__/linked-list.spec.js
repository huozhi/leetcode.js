const LinkedList = require('../linked-list')

describe('linked-list', () => {
  const l = new LinkedList()

  it('push', () => {
    l.push(2)
    l.push(1)
    expect(l.toArray()).toEqual([2, 1])
  })
})

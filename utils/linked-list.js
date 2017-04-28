class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null
    this.length = 0
  }

  push(val) {
    if (!this.head) {
      this.head = this.tail = new ListNode(val)
    } else {
      this.tail.next = new ListNode(val)
      this.tail = this.tail.next
    }
  }

  fromArray(array) {
    for (let i = 0, len = array.length; i < len; i++) {
      this.push(array[i])
    }
    this.length = array.length
    return this.head
  }

  forEach(fn) {
    for (let curr = this.head; curr; curr = curr.next) {
      fn(curr.val, curr)
    }
  }

  toArray() {
    const array = []
    this.forEach(val => { array.push(val) })
    return array
  }
}

LinkedList.ListNode = ListNode

module.exports = LinkedList

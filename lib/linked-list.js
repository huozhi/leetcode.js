export class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

export class LinkedList {
  constructor() {
    this.head = this.tail = null
    this.length = 0
  }

  buildFromArray(array) {
    for (let i = 0, len = array.length; i < len; i++) {
      const val = array[i]
      if (!this.head) {
        this.head = new ListNode(val)
        this.tail = this.head
      } else {
        this.tail.next = new ListNode(val)
        this.tail = this.tail.next
      }
    }
    this.length = array.length
    return this.head
  }
}

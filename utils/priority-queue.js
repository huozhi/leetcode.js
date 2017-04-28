const toString = Object.prototype.toString

const defaultComparator = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b
  } else {
    a = toString.call(a)
    b = toString.call(b)
    return a === b ? 0 : (a > b ? 1 : -1)
  }
}

class PriorityQueue {
  constructor(comparator) {
    this.comparator = comparator || defaultComparator
    this.elements = []
  }

  _compare(first, second) {
    return this.comparator(this.elements[first], this.elements[second])
  }

  _swap(first, second) {
    const tmp = this.elements[first]
    this.elements[first] = this.elements[second]
    this.elements[second] = tmp
  }

  push(val) {
    const size = this.elements.push(val)
    let current = size - 1
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2)
      if (this._compare(parent, current) > 0) break
      console.log('parent', this.elements[parent], 'current', this.elements[current])
      this._swap(parent, current)
      current = parent
    }
  }

  pop() {
    const top = this.peek()
    const last = this.elements.pop()
    const size = this.size()
    let current = 0
    this.elements[current] = last

    while (current < size) {
      const firstChild = current * 2 + 1
      const secondChild = firstChild + 1
      let larger = current
      if (firstChild < size && this._compare(current, firstChild) <= 0) {
        larger = firstChild
      }

      if (secondChild < size && this._compare(current, secondChild) <= 0) {
        larger = secondChild
      }

      if (larger === current) break

      this._swap(current, larger)
      current = larger
    }
    return top
  }

  peek() {
    if (this.elements.length === 0) {
      throw RangeError('There is no item in queue')
    }
    return this.elements[0]
  }

  size() {
    return this.elements.length
  }

  empty() {
    return this.elements.length === 0
  }

  forEach(fn) {
    this.elements.forEach(fn)
  }
}

module.exports = PriorityQueue

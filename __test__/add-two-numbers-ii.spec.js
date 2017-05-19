const addTwoNumbers = require('../src/add-two-numbers-ii')
const LinkedList = require('../utils/linked-list')

describe('add-two-numbers-ii', () => {
  const testCases = [
    [[5], [5]],
    [[8, 9, 9], [2]],
    [[1], [9, 9]],
    [[7, 2, 4, 3], [5, 6, 4]],
    [[9], [9]],
    [[2, 8, 9, 9, 9, 9, 8, 9, 9, 9], [8, 1, 2]],
  ]

  const arrayToNumber = (array) => array.reduce((r, c) => (r * 10 + c), 0)

  testCases.forEach((input, idx) => {
    it(idx.toString(), () => {
      const [s1, s2] = input
      const a = LinkedList.fromArray(s1)
      const b = LinkedList.fromArray(s2)
      const c = addTwoNumbers(b, a)

      const sum = arrayToNumber(LinkedList.toArray(c))
      expect(arrayToNumber(s1) + arrayToNumber(s2)).toBe(sum)
    })

  })
})

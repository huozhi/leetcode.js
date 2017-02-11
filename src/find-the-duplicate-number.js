/**
 * @param {number[]} nums
 * @return {number}
 */

const findDuplicate = function(numbers) {
  if (numbers.length < 1) {
      return -1
  }
  let slow = numbers[0]
  let fast = numbers[numbers[0]]

  while (slow !== fast) {
      slow = numbers[slow]
      fast = numbers[numbers[fast]]
  }

  fast = 0

  while (slow !== fast) {
      slow = numbers[slow]
      fast = numbers[fast]
  }
  return slow
}

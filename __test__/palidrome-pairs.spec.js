const palindromePairs = require('../src/palindrome-pairs')

describe('palindrome-pairs', () => {
  it('1', () => {
    expect(
      palindromePairs(['abcd', 'dcba', 'lls', '', 's', 'sssll']).sort(),
    ).toEqual([[0, 1], [1, 0], [4, 2], [4, 3], [3, 4], [2, 5]].sort())
  })
})

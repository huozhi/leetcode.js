const checkInclusion = require('../src/permutation-in-string')

describe('permutation-in-string', () => (
  it('1', () => {
    expect(checkInclusion('ab', 'a')).toBe(false)
    expect(checkInclusion('ab', 'eidbaooo')).toBe(true)
    expect(checkInclusion('ab', 'eidboaoo')).toBe(false)
  })
))

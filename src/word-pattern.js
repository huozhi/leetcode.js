'use strict'

/**

Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

const wordPattern = function(pattern, str) {
  const pdict = {}, sdict = {}
  let pv, sv
  str = str.split(/\ +/)
  if (pattern.length !== str.length) {
    return false
  }
  for (var len = pattern.length, i = 0; i < len; i++) {
    pv = pattern[i], sv = str[i]
    if (!pdict[pv]) {
      pdict[pv] = sv
    }
    else if (pdict[pv] !== sv) {
      return false
    }

    if (!sdict[sv]) {
      sdict[sv] = pv
    }
    else if (sdict[sv] !== pv) {
      return false
    }
  }
  return true
}

module.exports = {wordPattern}

const letterMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}

const permute = (digits, i, j, item, results) => {
  if (i === digits.length) {
    if (item) {
      results.push(item)
    }
    return
  }
  const chr = digits[i]
  for (let k = 0; k < letterMap[chr].length; k++) {
    permute(digits, i + 1, k, item + letterMap[chr][k], results)
  }
}

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  const results = []
  permute(digits.replace(/1|0/g, ''), 0, 0, '', results)
  return results
};


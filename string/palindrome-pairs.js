/**
 * @param {string[]} words
 * @return {number[][]}
 */

var reverse = (str) => str.split('').reverse().join('')

var isPalindrome = (str) => {
  let i = 0, j = str.length - 1
  while (i < j) {
    if (str[i++] !== str[j--]) return false
  }
  return true
}

var palindromePairs = function(words) {
  const map = new Map()
  const pairs = []
  words.forEach((w, i) => {
    map.set(reverse(w), i)
  })

  if (map.has('')) {
    const k = map.get('')
    for (let i = 0; i < words.length; i++) {
      if (i !== k && isPalindrome(words[i])) {
        pairs.push([i, k]) // case: [palidrom, ""]
      }
    }
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      const left = words[i].substr(0, j + 1)
      const right = words[i].substr(j + 1)

      if (isPalindrome(right) && map.has(left) && map.get(left) !== i) {
        pairs.push([i, map.get(left)]) // left won't be empty string
      }

      if (isPalindrome(left) && map.has(right) && map.get(right) !== i) {
        pairs.push([map.get(right), i]) // including case: ["", palidrom]
      }
    }

  }
  return pairs
};

module.exports = palindromePairs

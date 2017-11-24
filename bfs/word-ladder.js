/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function(beginWord, endWord, wordList) {
  // if (beginWord === endWord) return 0 // no duplicates in wordList, so omit this case
  if (beginWord.length !== endWord.length) return 0

  const dict = new Set(wordList)
  const alpha = Array.from({length: 26}).map((_, i) => String.fromCharCode(i + 'a'.charCodeAt(0)))
  let distance = 2

  const queue = []
  queue.push(beginWord)
  while (queue.length) {
    const size = queue.length
    for (let k = 0; k < size; k++) {
      const front = queue.shift()
      for (let i = 0; i < front.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
          const word = replaceCharAt(front, i, alpha[j])
          if (dict.has(word)) {
            if (word === endWord) {
              return distance
            }
            dict.delete(word)
            queue.push(word)
          }
        }
      }
    }
    distance++
  }
  return 0
}

function replaceCharAt(str, index, char) {
  return str.substr(0, index) + char + str.substr(index + char.length)
}

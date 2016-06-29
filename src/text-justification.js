'use strict'

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function(words, maxWidth) {
  const justified = []
  const wc = words.length
  let i = 0
  let lineSize = 0
  let lineWords = []
  while (i < wc) {
    const curWord = words[i]
    if (lineSize + curWord.length <= maxWidth) {
      lineWords.push(curWord)
      lineSize += curWord.length
      if (lineSize < maxWidth) lineSize ++ // add space
      i++
    }
    const isEndline = lineSize === maxWidth || i < wc && lineSize + words[i].length > maxWidth
    const isEndText = i === wc

    let lineStr
    if (isEndText) {
      lineStr = lineWords.join(' ')
    } else if (isEndline) {
      const totalLength = lineWords.reduce((p, c) => { return p + c.length }, 0)
      let spaceCount = maxWidth - totalLength
      const gap = lineWords.length > 1
                ? parseInt(spaceCount / (lineWords.length - 1))
                : 1
      let innerSpace = spaceCount % (lineWords.length - 1)
      lineStr = ''
      lineWords.forEach((w, idx) => {
        lineStr += w
        if (idx !== lineWords.length - 1) {
          lineStr += new Array(Math.min(gap, spaceCount) + 1).join(' ')
          if (innerSpace > 0) {
            lineStr += ' '
            spaceCount--
            innerSpace--
          }
          spaceCount = Math.max(spaceCount - gap, 0)
        }
      })
    }
    if (isEndText || isEndline) {
      if (lineStr.length < maxWidth) {
        lineStr += new Array(maxWidth - lineStr.length + 1).join(' ')
      }
      justified.push(lineStr)
      lineWords = []
      lineStr = ''
      lineSize = 0
    }
  }
  return justified
}

module.exports = {fullJustify}

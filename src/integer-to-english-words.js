const l20 = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
]

const l100 = [
  '',
  '',
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety',
]

var convertRatio = function(num) {
  const H = 'Hundred'
  const hundred = Math.floor(num / 100) % 10
  const left = num - 100 * hundred
  const res = []
  if (hundred) {
    res.push(l20[hundred])
    res.push(H)
  }

  if (left > 0 && left < 20) {
    res.push(l20[left])
  } else {
    const decade = Math.floor(left / 10)
    const unit = left % 10
    if (decade) {
      res.push(l100[decade])
    }
    if (unit) {
      res.push(l20[unit])
    }
  }
  return res
}

/**
 * @param {number} num
 * @return {string}
 */
const numberToWords = function(num) {
  if (num === 0) {
    return l20[num]
  }
  const res = []

  const B = 'Billion'
  const M = 'Million'
  const T = 'Thousand'
  const left = num % 1000
  const thousand = Math.floor(num / Math.pow(10, 3)) % 1000
  const million = Math.floor(num / Math.pow(10, 6)) % 1000
  const billion = Math.floor(num / Math.pow(10, 9)) % 1000

  if (billion) {
    res.push(...convertRatio(billion))
    res.push(B)
  }
  if (million) {
    res.push(...convertRatio(million))
    res.push(M)
  }
  if (thousand) {
    res.push(...convertRatio(thousand))
    res.push(T)
  }
  if (left) {
    res.push(...convertRatio(left))
  }
  return res.join(' ').trim()
}

module.exports = numberToWords

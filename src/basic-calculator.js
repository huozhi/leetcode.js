var isNumber = (val) => /[0-9]/.test(val)
var isAlpha = (val) => /[a-z]/.test(val)
var isEmpty = (arr) => arr.length === 0
var top = (stack) => stack[stack.length - 1]

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(str) {
  var i = 0
  var snum = []
  var sop = []

  var prior = (val) => {
    if (isNumber(val)) {
      return 0
    } else if (isAlpha(val)) {
      return 1
    } else if (/\+|-/.test(val)) {
      return 2
    } else if (/\*|\//.test(val)) {
      return 3
    }
    return -1
  }

  var evaluate = (a, b, op) => {
    switch (op) {
      case '+': return parseInt(a + b, 10)
      case '-': return parseInt(a - b, 10)
      case '*': return parseInt(a * b, 10)
      case '/': return parseInt(a / b, 10)
    }
  }
  
  var evaluateNext = () => {
    let op = sop.pop()
    let b = snum.pop()
    let a = snum.pop()
    snum.push(evaluate(a, b, op))
  }

  while (i < str.length) {
    let ch = str[i]
    if (/\s/.test(ch)) {
      i++
      continue
    }

    if (isNumber(ch)) {
      let num = ''
      while (isNumber(str[i])) {
        num += str[i]
        i++
      }
      snum.push(parseInt(num, 10))
    } else if (ch === '(') {
      sop.push('(')
      i++
    } else if (ch === ')') {
      while (top(sop) !== '(') {
        evaluateNext()
      }
      sop.pop()
      i++
    } else {
      if (isEmpty(sop) || prior(top(sop)) < prior(ch)) {
        sop.push(ch)
      } else {
        while (!isEmpty(sop) && prior(top(sop)) >= prior(ch)) {
          evaluateNext()
        }
        sop.push(ch)
      }
      i++
    }
  }

  while (!isEmpty(sop)) {
    evaluateNext()
  }
  return top(snum)
}


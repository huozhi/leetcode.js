const isNumber = (ch) => ch >= '0' && ch <= '9'
const isEmpty = (arr) => arr.length === 0
const top = (stack) => stack[stack.length - 1]

const prior = (ch) => {
  if (isNumber(ch)) {
    return 1
  } else if (ch === '+' || ch === '-') {
    return 2
  } else if (ch === '*' || ch === '/') {
    return 3
  }
  return 0
}

const evaluate = (a, b, op) => {
  switch (op) {
    case '+': return parseInt(a + b)
    case '-': return parseInt(a - b)
    case '*': return parseInt(a * b)
    case '/': return parseInt(a / b)
  }
}

/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(str) {
  let i = 0
  const snum = []
  const sop = []
  
  const accumulate = () => {
    const b = snum.pop()
    const a = snum.pop()
    snum.push(evaluate(a, b, sop.pop()))
  }

  while (i < str.length) {
    const ch = str[i]
    if (ch === ' ') {
      i++
      continue
    }

    if (isNumber(ch)) {
      let num = ''
      while (isNumber(str[i])) {
        num += str[i]
        i++
      }
      snum.push(parseInt(num))
    } else if (ch === '(') {
      sop.push('(')
      i++
    } else if (ch === ')') {
      while (top(sop) !== '(') {
        accumulate()
      }
      sop.pop()
      i++
    } else {
      if (isEmpty(sop) || prior(top(sop)) < prior(ch)) {
        sop.push(ch)
      } else {
        while (!isEmpty(sop) && prior(top(sop)) >= prior(ch)) {
          accumulate()
        }
        sop.push(ch)
      }
      i++
    }
  }

  while (!isEmpty(sop)) {
    accumulate()
  }
  return top(snum)
}


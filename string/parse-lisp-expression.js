/**
 * @param {string} expression
 * @return {number}
 */
const evaluate = function(expression) {
  const TK_REGEX = /(let|add|mult)|(\(|\))|(-?\d+)|(\w+)/
  const tokens = expression.split(TK_REGEX).filter(tk => Boolean(tk) && tk !== ' ')
  const scopeStack = [Object.create({})]

  const next = () => tokens.shift()
  const isDigit = (str) => /^-?\d+$/.test(str)
  const isVariable = (str) => /^\w(\w|\d)*$/.test(str)

  /*
   * expr:
   * let: (let w1 expr() w2 expr() .... wn expr() expr())
   * add: (add expr() expr())
   * mult: (mult expr() expr())
   * (expr())
   * digit: 123, -123
   * variable
   */
  const expr = () => {
    const tk = next()
    if (isDigit(tk)) {
      return parseInt(tk)
    }
    if (tk === '(') {
      const nextTk = next()
      if (nextTk === 'let') {
        const scope = Object.create({})
        const parentScope = scopeStack[scopeStack.length - 1]
        for (const key in parentScope) scope[key] = parentScope[key]
        scopeStack.push(scope)
        while (
          isVariable(tokens[0]) && 
          (tokens[1] === '(' || isDigit(tokens[1]) || isVariable(tokens[1]))
        ) {
          const def = next()
          const val = expr()
          scope[def] = val
        }
        result = expr()
        scopeStack.pop()
      }
      else if (nextTk === 'add') {
        result = expr() + expr()
      }
      else if (nextTk === 'mult') {
        result = expr() * expr()
      } else {
        result = expr()
      }
      next()
      return result
    }
    return scopeStack[scopeStack.length - 1][tk]
  }
  return expr()
};

module.exports = evaluate

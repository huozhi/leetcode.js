const evaluate = require('../string/parse-lisp-expression')

const testCases = [
  ['(add 1 2)', 3],
  ['(mult 3 (add 2 3))', 15],
  ['(let x 2 (mult x 5))', 10],
  ['(let x 2 (mult x (let x 3 y 4 (add x y))))', 14],
  ['(let x 3 x 2 x)', 2],
  ['(let x 1 y 2 x (add x y) (add x y))', 5],
  ['(let x 2 (add (let x 3 (let x 4 x)) x))', 6],
  ['(let a1 3 b2 (add a1 1) b2)', 4],
  ['(add 101 -220)', -119],
  ['(let x -2 y x y)', -2],
  ['(let var 78 b 77 (let c 33 (add c (mult var 66))))', 5181],
  ['(let x0 4 x1 -2 x2 3 x3 -5 x4 -3 x5 -1 x6 3 x7 -2 x8 4 x9 -5 (mult x2 (mult (let x0 -3 x4 -2 x8 4 (mult (let x0 -2 x6 4 (add x5 x2)) x3)) (mult (mult -7 (mult -9 (let x0 -2 x7 3 (add -10 x0)))) x6))))', 68040],
]

describe('parse-lisp-expression', () => {
  testCases.forEach((testCase, index) => {
    it(index, () => {
      const [expression, result] = testCase
      expect(evaluate(expression)).toBe(result)
    })
  })
})


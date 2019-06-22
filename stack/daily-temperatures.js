/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = function (T) {
  const stack = [0]
  const isEmpty = () => stack.length === 0
  const back = () => stack[stack.length - 1]

  const variation = T.map(() => 0)
  for (let i = 0; i < T.length - 1; i++) {
    if (!isEmpty() && T[back()] >= T[i + 1]) {
      stack.push(i + 1)
    } else {
      while (!isEmpty() && T[back()] < T[i + 1]) {
        const lastIndex = back()
        variation[lastIndex] += (i + 1 - lastIndex)
        stack.pop()
      }
      stack.push(i + 1)
    }
  }
  return variation
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))

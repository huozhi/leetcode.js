/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = function(timeSeries, duration) {
  const range = [0, 0]
  let total = 0
  for (let i = 0; i < timeSeries.length; i++) {
    const cur = [timeSeries[i], timeSeries[i] + duration]
    if (cur[0] < range[1]) {
      // intersected
      total += (cur[1] - range[1])
      range[1] = cur[1]
    } else {
      total += duration
      range[0] = cur[0]
      range[1] = cur[1]
    }
  }
  return total
}

module.exports = findPoisonedDuration


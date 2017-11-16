/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const times = timePoints.map(time => {
        const [min, sec] = time.split(':').map(n => parseInt(n, 10))
        return min * 60 + sec
    })
    const maxSec = 24 * 60
    let minDis = maxSec
    for (let i = 0; i < times.length; i++) {
        for (let j = i + 1; j < times.length; j++) {
            minDis = Math.min(
                minDis,
                Math.abs(times[i] - times[j] + maxSec) % maxSec,
                Math.abs(times[j] - times[i] + maxSec) % maxSec
            )
        }
    }
    return minDis
};

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    const times = Array(n).fill(0)
    const stack = []
    let lastType
    let lastId = 0
    let lastEnd = 0
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i].split(':')
        const id = parseInt(log[0], 10)
        const type = log[1]
        let time =  parseInt(log[2], 10)

        if (type === 'start') {
            stack.push([id, type, time])
        } else {
            const startTime = stack.pop()[2]
            const delta = time - startTime + 1
            times[id] += delta
            if (stack.length) {
              const topId = stack[stack.length - 1][0]
              times[topId] -= delta
            }
        }
    }
    return times
};

// 2, ["0:start:0","1:start:2","1:end:5","0:end:6"]
// 1, ["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"]
// 1, ["0:start:0","0:start:1","0:start:2","0:end:3","0:end:4","0:end:5"],
// 2, ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:6","0:end:7"]
// 3, ["0:start:0","0:end:0","1:start:1","1:end:1","2:start:2","2:end:2","2:start:3","2:end:3"]

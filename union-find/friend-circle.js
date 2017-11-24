/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    const parents = Array(M.length).fill().map((_, i) => i)
    let count = M.length
    for (let i = 0; i < M.length; i++) {
        for (let j = i + 1; j < M.length; j++) {
            if (M[i][j]) {
                const pi = unionFind(i, parents)
                const pj = unionFind(j, parents)
                
                if (pi !== pj) {
                    parents[pj] = pi
                    count--
                }
            }
        }
    }
    return count
};

var unionFind = (x, parents) => {
    return parents[x] === x ? x : unionFind(parents[x], parents)
}



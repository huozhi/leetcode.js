/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let pre = [1]
    if (rowIndex <= 0) return pre
    for (let i = 1; i <= rowIndex; i++) {
        const cur = [1]
        for (let j = 1; j < i; j++) {
            cur.push(pre[j - 1] + pre[j])
        }
        cur.push(1)
        pre = cur
    }
    return pre
};

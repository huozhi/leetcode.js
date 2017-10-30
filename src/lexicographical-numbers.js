/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const orders = []
    let curr = 1
    while (orders.length < n) {
        orders.push(curr)
        // append zero
        if (curr * 10 <= n) {
            curr = curr * 10
        } else if (curr + 1 <= n && curr % 10 < 9) {
            curr++
        } else {
            while (((curr / 10) >> 0) % 10 === 9) {
                curr = (curr / 10) >> 0
            }
            curr = ((curr / 10) >> 0) + 1
        }
    }
    return orders
};


/**
 *  * @param {number} n
 *   * @return {boolean}
 *    */
const isPowerOfThree = function(n) {
    return n.toString(3).match(/^10*$/) !== null
};


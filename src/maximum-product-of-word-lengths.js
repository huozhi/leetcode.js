var offset = (chr) => chr.charCodeAt(0) - 'a'.charCodeAt(0)

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    const hashValues = words.map(word => {
        let mask = 0
        for (let i = 0; i < word.length; i++) {
          mask |= (1 << (offset(word[i]) + 1))
        }
        return mask
    })
    let product = 0
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if ((hashValues[i] & hashValues[j]) === 0) {
                product = Math.max(product, words[i].length * words[j].length)
            }
        }
    }
    return product
};

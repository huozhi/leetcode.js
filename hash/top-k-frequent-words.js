/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = {}
    for (const word of words) {
        if (map[word] == null) map[word] = 0
        map[word]++
    }
    const count = Array(words.length).fill().map(() => [])

    Object.keys(map).forEach(word => {
        count[ map[word] ].push(word)
    })

    count.forEach(bucket => bucket.sort())

    const res = []
    for (let i = count.length - 1; i >= 0 && k; i--) {
        if (count[i].length) {
            while (k && count[i].length) {
                res.push(count[i].shift())
                k--
            }
        }

    }
    return res
};

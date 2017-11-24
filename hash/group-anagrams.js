/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var hm = new Map()
    strs.forEach(str => {
        var key = str.split('').sort().join('')
        if (hm.has(key)) {
            hm.set(key, hm.get(key).concat(str))
        } else {
            hm.set(key, [str])
        }
    })
    return Array.from(hm.values())
};


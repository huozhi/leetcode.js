var searchTrie = function(trie, word) {
    let root = trie
    for (const chr of word) {
        root = root[chr]
        if (!root) return null
        if (root['#']) return root['#']
    }
    return null
}

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    const trie = {}
    for (const word of dict) {
        let root = trie
        for (const chr of word) {
            if (!root[chr]) root[chr] = {}
            root = root[chr]
        }
        root['#'] = word
    }
    const tokens = sentence.split(' ')
    const replace = tokens.map(token => {
        const replacement = searchTrie(trie, token)
        return replacement ? replacement : token
    })

    return replace.join(' ')
};

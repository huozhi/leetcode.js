// TODO: rewrite
var remove = function(s, path, i, count, size, ans) {
    if (i === s.length) {
        if (count === 0 && path.length === size) ans.add(path.join(''))
        return
    }

    const chr = s[i]
    if (chr === '(') {
        remove(s, path.concat(chr), i + 1, count + 1, size, ans)
        remove(s, path, i + 1, count, size, ans)
    } else if (chr === ')') {
      if (count === 0) {
        for (let j = 0; j < path.length; j++) {
          if (path[j] === ')') {
            const next = path.slice(0, j).concat(path.slice(j + 1))
            remove(s, next.concat(chr), i + 1, count, size, ans)
          }
        }
        remove(s, path, i + 1, count, size, ans)
      }
      else if (count > 0) {
        remove(s, path.concat(chr), i + 1, count - 1, size, ans)
      }
    } else {
        remove(s, path.concat(chr), i + 1, count, size, ans)
    }
}

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let size = 0
    let invalid = 0
    for (const c of s) {
      if (c === '(') size++
      else if (c === ')') {
        if (size) size--
        else invalid++
      }
    }
    const results = new Set()
    remove(s, [], 0, 0, s.length - invalid - size, results)
    if (!results.size) {
      results.add('')
    }
    return Array.from(results)
};


// removeInvalidParentheses('()())()')
// removeInvalidParentheses(')(')
// removeInvalidParentheses('(a)())()')
// removeInvalidParentheses('x(')

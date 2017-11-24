/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicate = function(paths) {
  const ht = new Map()
  const dirsWithFiles = paths.map(dirStr => {
    const [dir, ...files] = dirStr.split(' ')
    files.forEach(file => {
      const [filename, content] = file.split(/\(|\)/).filter(Boolean)
      const filepath = [dir, filename].join('/')
      if (!ht.has(content)) {
        ht.set(content, [filepath])
      } else {
        ht.set(content, ht.get(content).concat(filepath))
      }
    })
  })
  return Array.from(ht.values()).filter(a => a.length > 1)
}

module.exports = findDuplicate

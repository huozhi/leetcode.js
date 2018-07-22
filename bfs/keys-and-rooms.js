/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function(rooms) {
  const keys = Array(rooms.length).fill(false)
  keys[0] = true
  const que = rooms[0] || []
  
  while (que.length) {
      const room = que.shift()
      const nextKeys = rooms[room]
      nextKeys.forEach(key => {
          if (!keys[room]) que.push(key)
      })
      keys[room] = true
  }
  return keys.every(Boolean)
};

module.exports = canVisitAllRooms

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.root = build(nums, 0, nums.length - 1)
};

var RangeNode = function(start, end, val) {
  this.start = start
  this.end = end
  this.val = val
  this.left = null
  this.right = null
}

var build = function(array, start, end) {
  if (start > end) {
    return null
  } else if (start === end) {
    return new RangeNode(start, end, array[end])
  } else {
    var mid = parseInt((start + end) / 2)
    var lhs = build(array, start, mid)
    var rhs = build(array, mid + 1, end)
    var node = new RangeNode(start, end, lhs.val + rhs.val)
    node.left = lhs
    node.right = rhs
    return node
  }
}

var query = function(root, start, end) {
  if (!root || start > root.end || end < root.start || start > end) {
    return 0
  }

  if (root.end === end && root.start === start) {
    return root.val
  }

  var lhs = 0
  var rhs = 0
  var mid = parseInt((root.start + root.end) / 2)
  if (root.left && start <= mid) {
    lhs = query(root.left, start, Math.min(mid, end))
  }
  if (root.right && end > mid) {
      rhs = query(root.right, Math.max(mid + 1, start), end)
  }
  return lhs + rhs
}

var update = function(root, i, val) {
  if (!root || i > root.end || i < root.start) {
    return 0
  }

  if (root.start === i && root.end === i) {
    root.val = val
  } else {
    var lhs = 0
    var rhs = 0
    var mid = parseInt((root.start + root.end) / 2)
    if (root.left) {
      lhs = i <= mid ? update(root.left, i, val) : root.left.val
    }
    if (root.right) {
      rhs = i > mid ? update(root.right, i, val) : root.right.val
    }
    root.val = lhs + rhs
  }
  return root.val
}

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
  update(this.root, i, val)
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return query(this.root, i, j)
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */

module.exports = NumArray

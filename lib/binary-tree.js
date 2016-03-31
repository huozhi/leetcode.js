export class TreeNode {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }

  insert(value) {
    if (value < this.val) {
      if (this.left) {
        this.left.insert(value)
      } else {
        this.left = new TreeNode(value)
      }
    } else if (value > this.val) {
      if (this.right) {
        this.right.insert(value)
      } else {
        this.right = new TreeNode(value)
      }
    }
  }
}

export class BinaryTree {
  constructor() {
    this.root = null
  }

  buildFromArray(array) {
    for (let i = 0, len = array.length; i < len; i++) {
      if (!this.root) {
        this.root = new TreeNode(array[i])
      } else {
        this.root.insert(array[i])
      }
    }
    return this
  }

  _inorder(node, results) {
    if (node) {
      this._inorder(node.left, results)
      Array.prototype.push.call(results, node.val)
      this._inorder(node.right, results)
    }
  }

  inorder() {
    let results = []
    this._inorder(this.root, results)
    // console.log(results)
    return results
  }
}

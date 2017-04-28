class TreeNode {
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

class BinaryTree {
  constructor(root=null) {
    this.root = root
  }

  fromArray(array) {
    for (let i = 0, len = array.length; i < len; i++) {
      if (!this.root) {
        this.root = new TreeNode(array[i])
      } else {
        this.root.insert(array[i])
      }
    }
    return this.root
  }

  static fromArray(array) {
    return new BinaryTree().fromArray(array)
  }

  static toArray(root) {
    // TODO: use level traversal
    return new BinaryTree(root).preorder()
  }

  _preorder(node, results) {
    if (node) {
      Array.prototype.push.call(results, node.val)
      this._inorder(node.left, results)
      this._inorder(node.right, results)
    }
  }

  _inorder(node, results) {
    if (node) {
      this._inorder(node.left, results)
      Array.prototype.push.call(results, node.val)
      this._inorder(node.right, results)
    }
  }

  inorder() {
    const results = []
    this._inorder(this.root, results)
    return results
  }

  preorder() {
    const results = []
    this._preorder(this.root, results)
    return results
  }
}

BinaryTree.TreeNode = TreeNode

module.exports = BinaryTree

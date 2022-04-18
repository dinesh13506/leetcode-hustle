/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    let p = root, stack = [], values = []
    while(p != null || stack.length > 0) {
        while(p!= null) {
            stack.push(p)
            p = p.left
        }
        p = stack.pop()
        values.push(p.val)
        p = p.right
    }
    this.inorder = values
    this.index = -1
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if(this.index + 1 < this.inorder.length) {
        return true
    }
    return false
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.index++
    return this.inorder[this.index]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasPrev = function() {
    if(this.index - 1 >= 0) {
        return true
    }
    return false
};

/**
 * @return {number}
 */
BSTIterator.prototype.prev = function() {
    this.index--
    return this.inorder[this.index]
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.hasNext()
 * var param_2 = obj.next()
 * var param_3 = obj.hasPrev()
 * var param_4 = obj.prev()
 */
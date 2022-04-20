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
    this.pointer = 0
    this.inorder = []
    let stack = [], p = root
    while(p || stack.length) {
        while(p) {
            stack.push(p)
            p = p.left
        }
        p = stack.pop()
        this.inorder.push(p.val)
        p = p.right
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let value = this.inorder[this.pointer]
    this.pointer++
    return value
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.pointer < this.inorder.length ? true : false
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
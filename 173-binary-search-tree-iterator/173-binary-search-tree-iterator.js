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
    this.arr = []
    let inorder = (node) => {
        if(node) {
            inorder(node.left)
            this.arr.push(node.val)
            inorder(node.right)
        }
    }
    inorder(root)
    this.pointer = 0
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    
    let ans = this.arr[this.pointer]
    this.pointer++
    return ans
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if(this.pointer >= this.arr.length ) {
        return false
    }
    return true
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
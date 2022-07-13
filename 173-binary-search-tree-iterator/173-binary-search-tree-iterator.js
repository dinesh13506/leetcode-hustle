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
    this.nums = []
    this.pointer = -1
    this.stack = []
    this.last = root
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.pointer++
    if(this.pointer == this.nums.length) {
        let p = this.last
        while(p) {
            this.stack.push(p)
            p = p.left
        }
        p = this.stack.pop()
        this.nums.push(p.val)
        this.last = p.right
        return p.val
    }
    //return this.nums[this.pointer]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if(this.last || this.stack.length > 0 || this.pointer <= this.nums.length-2) {
        return true
    }
    return false
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
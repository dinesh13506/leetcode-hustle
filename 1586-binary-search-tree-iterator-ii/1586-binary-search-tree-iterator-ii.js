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
    this.last = root
    this.stack = new Array()
    this.pointer = -1
    this.arr = []
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.last || this.stack.length || this.pointer + 1 < this.arr.length
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.pointer++
    if(this.pointer == this.arr.length) {
        while(this.last) {
            this.stack.push(this.last)
            this.last = this.last.left
        }
        let curr = this.stack.pop()
        this.last = curr.right
        this.arr.push(curr.val)
    }
    return this.arr[this.pointer]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasPrev = function() {
    return this.pointer - 1 >=0
};

/**
 * @return {number}
 */
BSTIterator.prototype.prev = function() {
    this.pointer--
    return this.arr[this.pointer]
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.hasNext()
 * var param_2 = obj.next()
 * var param_3 = obj.hasPrev()
 * var param_4 = obj.prev()
 */
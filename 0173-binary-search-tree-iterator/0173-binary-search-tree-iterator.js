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
    
    this.pointer = -1;
    this.nodes = [];
    let inorder = (node) => {
        if(node) {
            inorder(node.left);
             this.nodes.push(node);
            inorder(node.right);
        }
    }
    inorder(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.pointer++;
    return this.nodes[this.pointer].val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if(this.pointer + 1 < this.nodes.length) {
        return true;
    }
    return false;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
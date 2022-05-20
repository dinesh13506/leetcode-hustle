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
var FindElements = function(root) {
    
    let set = new Set()
    let dfs = function(node, value) {
        if(node == null) {
            return
        }
        node.val = value
        set.add(value)
        let leftValue = 2 * value + 1
        dfs(node.left, leftValue)
        dfs(node.right, leftValue + 1)
    }
    dfs(root, 0)
    this.set = set
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    if(this.set.has(target)) {
        return true
    }
    return false
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
 var twoSumBSTs = function(root1, root2, target) {
    let map = {}
    store_compliment(root1,target,map)
    return preorder(root2,map)
};


let preorder = function(root,map) {
    if(root) {
        if(map[root.val]) {
            return true
        }
        let l = preorder(root.left,map)
        if(l) {
            return true
        } else {
            let r = preorder(root.right,map)
            if( r ) {
                return true
            } else {
                return false
            }
        }
        
    } else {
        return false
    }
}

let store_compliment = function(root,target,map) {
    if(root) {
        store_compliment(root.left,target,map)
        map[target-root.val] = true
        store_compliment(root.right,target,map)
    }
}
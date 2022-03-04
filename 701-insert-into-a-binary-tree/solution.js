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
 * @param {number} val
 * @return {TreeNode}
 */
 var insertIntoBST = function(root, val) {
    
    if(root == null){
        return new TreeNode(val, null, null)
    }
    let response = search(root,null,-1,val)
    let parent = response[0]
    let dir = response[1]
    if(dir == 0) {
        parent.left = new TreeNode(val, null, null)
    } else if(dir == 1) {
        parent.right = new TreeNode(val, null, null)
    }
    return root
    
};



let search = function(root,parent,dir,val) {
    if(root == null) {
        return [parent,dir]
    }
    
    if(root.val > val) {
        return search(root.left,root,0,val)
    } else {
        return search(root.right,root,1,val)
    }
    
    
}
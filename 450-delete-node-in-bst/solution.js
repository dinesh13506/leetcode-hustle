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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
    
    if(root == null) {
        return root
    }
    
    if(key  < root.val) {
        root.left = deleteNode(root.left,key)
    }
    else if( key > root.val ) {
        root.right = deleteNode(root.right,key)
    }
    else {
        if(root.left == null && root.right ==null) {
            root = null
        }
        else if(root.right !=null) {
            let successor = getsuccessor(root)
            root.val = successor
            root.right = deleteNode(root.right,successor)
        }
        else if(root.left!=null) {
            let predecessor = getpredecessor(root)
            root.val = predecessor
            root.left = deleteNode(root.left,predecessor)
        }
    }
    
    return root
};


let getpredecessor = function(root) {
    root = root.left
    while(root.right) {
        root = root.right
    }
    return root.val
}

let getsuccessor = function(root) {
    root = root.right
    while(root.left) {
        root = root.left
    }
    return root.val
}
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
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root) {
    
    let ans = [];
    
    
    let isLeaf = (node) => {
        return node.left == null && node.right == null;
    }
    
    let leftSideView  = (node) => {
        if(node) {
            if(isLeaf(node)) return;
            ans.push(node.val);
            if(node.left) {
                leftSideView(node.left);
            } else if(node.right) {
                leftSideView(node.right);
            }
        }
    }
    let rightSideView  = (node) => {
        if(node) {
            if(isLeaf(node)) return;
            if(node.right) {
                rightSideView(node.right);
            } else if(node.left) {
                rightSideView(node.left);
            }
            ans.push(node.val);
        }
    }
    
    let leafNodes = (node) => {
        if(node) {
            if(isLeaf(node) && node != root) {
                ans.push(node.val);
            }
            leafNodes(node.left);
            leafNodes(node.right);
        }
    }
    
    if(root) {
        ans.push(root.val);
        if(root.left) {
            leftSideView(root.left);
        }
        leafNodes(root);
        if(root.right) {
            rightSideView(root.right);
        }
    }
    
    return ans;
    
};
We are given with a range [min, max].
The main idea is
1. If value at root is smaller than min, then discard the left subtree and root, as all the values to left and root are smaller than min. So our answer lies in right of root.
2. If value at root is greater than max , then discard the the right subtree and root, as all the values to right and root are greater then max. So our answer lies in left of root.
3. if 1 & 2 are false then root is in range & we should explore left and right of root.

```
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    return helper(root,low,high)
};


let helper = function(root,low,high) {
    if(root == null) {
        return null
    }
    
    if(root.val < low) {
        return helper(root.right,low,high)
    }
    if(root.val > high) {
        return helper(root.left,low,high)
    }
    
    root.left = helper(root.left,low,high)
    root.right = helper(root.right,low,high)
    return root
}
```
**Complexity Ananlysis**

As we will visit each node exactly once. so O(N) will be our time complexity, Assuming N is total number of nodes .

Auxiliary space complexity is O(H), where H is the height of binary search tree. It can go upto N if tree is not balanced. Please comment if you have doubts, i will reply in comment section.
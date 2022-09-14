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
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {
    
    let ans = 0
    let checkPseudoPalindrome = (arr) => {
       let odd = 0
       for(let count of arr) {
           if(count%2 != 0) odd++
       }
       if(odd == 0 || odd == 1) return true
       return false
    }
    let preorder = (node, count) => {
        if(node) {
            if(node.left == null && node.right == null) {
                count[node.val]++
                //console.log(count)
                if(checkPseudoPalindrome(count)) {
                    ans++
                }
                return node
            }
             count[node.val]++
            let left = preorder(node.left, count)
            if(left)  count[left.val]--
            
            let right = preorder(node.right, count)
            if(right) count[right.val]--
            return node
            
        } else {
            return null
        }
    }
    
    let count = new Array(10)
    count.fill(0)
    preorder(root, count)
    
    
    return ans
};
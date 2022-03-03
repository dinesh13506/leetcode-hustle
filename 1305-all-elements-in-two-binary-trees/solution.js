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
 * @return {number[]}
 */
 var getAllElements = function(root1, root2) {
    
    let arr1 = []
    let arr2 = []
    inorder(root1,arr1)
    inorder(root2,arr2)
    //console.log(arr1,arr2)
    let res = []
    let i = 0
    let j = 0
    while( i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }
    
    while( i < arr1.length) {
       res.push(arr1[i])
       i++ 
    }
    
    while( j < arr2.length) {
       res.push(arr2[j])
       j++ 
    }
    
    return res
};


let inorder = function(root,arr) {
    if(root) {
        inorder(root.left,arr)
        arr.push(root.val)
        inorder(root.right,arr)
    }
}
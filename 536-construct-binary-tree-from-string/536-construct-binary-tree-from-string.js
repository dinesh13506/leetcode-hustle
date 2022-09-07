/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s) {
    
    let index = 0
    let getNumber = () => {
        let isNegative = false
        if(s[index] == '-') {
            isNegative = true
            index++
        }
        let num = 0
        while(index < s.length && s[index] >= '0' && s[index] <= '9') {
            num = (num*10) + parseInt(s[index])
            index++
        }
        return (isNegative ? -1 * num : num)
    }
    
    let str2treeinternal = () => {
        if(index >= s.length) {
            return null
        }
        // if(s[index] == ')') {
        //     index++
        //     return null
        // }
        let num = getNumber(index)
        let node = new TreeNode(num)
        if(index < s.length && s[index] == '(') {
            index++
            node.left = str2treeinternal()
        }
        
        if(index < s.length && s[index] == '(') {
            index++
            node.right = str2treeinternal()
        }
        index++
        return node
        
    }
    
    return str2treeinternal()
};
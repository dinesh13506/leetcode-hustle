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
var widthOfBinaryTree = function(root) {
    
    let width = 0
    let deq = []
    deq.push([root,1])
    while(deq.length) {
        let temp = []
        while(deq.length && deq[0][0] == null) {
            deq.shift()
        }
        while(deq.length && deq[deq.length-1][0] == null) {
            deq.pop()
        }
        
        let len = 0
        for(let i = 0; i < deq.length; i++) {
            //console.log(deq[i])
            let [el, count] = deq[i]
            if(el == null) {
                temp.push([null, count * 2])
                len = len + count
            } else {
                len = len + 1
                if(el.left) {
                    temp.push([el.left,1])
                } else {
                    temp.push([null,1])
                }
                if(el.right) {
                    temp.push([el.right,1])
                } else {
                    temp.push([null,1])
                }
            }
        }
        width = Math.max(width, len)
        deq = temp
    }
    return width
};
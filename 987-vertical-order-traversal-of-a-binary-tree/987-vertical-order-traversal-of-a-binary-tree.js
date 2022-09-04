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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    
    let map = new Map()
    
    let preorder = (node,row,col) => {
        if(node) {
            if(map.has(col)) {
                map.get(col).push([row, node.val])
            } else {
                map.set(col, [[row, node.val]])
            }
            preorder(node.left, row + 1, col - 1)
            preorder(node.right, row + 1, col + 1)
        }
    }
    preorder(root, 0, 0)
    //console.log(map)
    for(let key of map.keys()) {
        let arr = map.get(key)
        arr.sort((a,b) => {
	        if(a[0] == b[0]) {
  	            return a[1] - b[1]
            } else {
  	            return a[0] - b[0]
        }
        })
    }
    //console.log(map)
    let cols = [...map.keys()]
    cols.sort((a,b) => {
        return a - b
    })
    let ans = []
    for(let col of cols) {
        let temp = []
        for(let ar of map.get(col)) {
            temp.push(ar[1])
        }
        ans.push(temp)
    }
    return ans
};
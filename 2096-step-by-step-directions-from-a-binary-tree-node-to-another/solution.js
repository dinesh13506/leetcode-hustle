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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
 var getDirections = function(root, startValue, destValue) {
    let path1 = []
    let path2 = []
    getpath(root,startValue,path1)
    getpath(root,destValue,path2)
    //console.log(path1,path2)
    while(path1.length && path2.length && path1[path1.length-1] == path2[path2.length-1]) {
        path1.pop()
        path2.pop()
    }
    //console.log(path1,path2)
    for( let i = 0; i < path1.length; i++) {
        path1[i] = 'U'
    }
    
    let i = 0
    let j = path2.length -1
    while( i <= j ) {
        let temp = path2[i]
        path2[i] = path2[j]
        path2[j] = temp
        i++
        j--
    }
    
    return [...path1,...path2].join('')
    
};


let getpath = function(root,value,path) {
    
    if(root.val == value) {
        //console.log("found")
        return true
    }
    
    if(root.left && getpath(root.left,value,path)) {
        path.push("L")
    }
    
    else if(root.right && getpath(root.right,value,path)) {
        path.push("R")
    }
    return path.length > 0 ? true : false
}
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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    let path = []
    let paths = []
    helper(root,paths,path)
    let result = []
    for( let p of paths ) {
        let str = ""
        for(let i = 0; i < p.length -1; i++) {
            str = str+p[i]+"->"
        }
        str = str + p[p.length-1]
        result.push(str)
    }
    return result
};


let helper = function(root,paths,path) {
    if(root==null) {
        return
    }
    path.push(root.val)
    if(ischild(root)) {
        paths.push(path.slice())
    }
    helper(root.left,paths,path)
    helper(root.right,paths,path)
    path.pop()
}

let ischild = function(root) {
    if(root && root.left == null && root.right == null) {
        return true
    }
    return false
}
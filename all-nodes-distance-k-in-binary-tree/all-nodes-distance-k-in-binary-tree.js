/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    let map = {}
    preorder(root,map,null)
    //console.log(map)
    let result = {
        list : new Array()
    }
    let is_visited = {}
    nodesAtK(target,k,result,map,is_visited)
    return result.list
};


let nodesAtK = function( root, k,result,map,is_visited) {
    if( root == null ) return
    //console.log(root)
    if(is_visited[root.val]) {
        return
    }
    is_visited[root.val] = true
    if( k == 0) {
        result.list.push(root.val)
        return
    }
    nodesAtK(root.left,k-1,result,map,is_visited)
    nodesAtK(root.right,k-1,result,map,is_visited)
    nodesAtK(map[root.val],k-1,result,map,is_visited)
}
let preorder = function( root, map,parent) {
    if( root ) {
        map[root.val] = parent
        parent = root
        preorder(root.left,map,parent)
        preorder(root.right,map,parent)
    }
}
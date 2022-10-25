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
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function(root, limit) {
    let paths = [];
    
    let isLeaf = (node) => {
        return !node.left && !node.right;
    }
    let nodes = [];
    let preorder = (node, path) => {
        if(node) {
            path.push(node);
            nodes.push(node);
            if(isLeaf(node)) {
                //console.log(path);
                paths.push(path.slice());
            } else {
                preorder(node.left, path);
                preorder(node.right, path);
            }
            path.pop();
        }
    }
    preorder(root, []);
    //console.log(paths);
    for(let path of paths) {
        let sum = 0;
        for(let node of path) {
            node.count = node.count ? node.count + 1 : 1;
            sum += node.val;
        }
        //console.log(sum);
        for(let node of path) {
            if(sum < limit) {
                node.pathCount = node.pathCount ? node.pathCount + 1 : 1;
            }
        }
    }
    let innodes = [];
    for(let node of nodes) {
        //console.log(node.val, node.count, node.pathCount);
        if(node.count == node.pathCount) {
            //console.log("insufficient node ", node.val);
            innodes.push(node);
        }
    }
    
    let deleteNodes = (node, parent, dir) => {
        if(node) {
            if(innodes.includes(node)) {
                //console.log("insufficient node ", node.val);
                if(parent && dir != -1) {
                    if(dir == 0) {
                        parent.left = null;
                    } else {
                         parent.right = null;
                    }
                    return root;
                }
                else if(parent == null) {
                    return null
                }
            }
            let left = deleteNodes(node.left, node, 0);
            let right = deleteNodes(node.right, node, 1);
            return root
        }
    }
    return deleteNodes(root, null, -1);
};
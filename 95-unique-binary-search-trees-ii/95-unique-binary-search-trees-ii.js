/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    
    let generate_trees = (start, end) => {
        
        let all_trees = []
        if(start > end) {
            all_trees.push(null)
            return all_trees
        }
        
        for(let i = start; i <= end; i++) {
            let left_trees = generate_trees(start, i - 1)
            let right_trees = generate_trees(i + 1, end)
            
            for(let l of left_trees) {
                for(let r of right_trees) {
                    let curr = new TreeNode(i)
                    curr.left = l
                    curr.right = r
                    all_trees.push(curr)
                }
            }
        }
        return all_trees
    }
    
    if(n == 0) {
        return [null]
    }
    
    return generate_trees(1,n)
};
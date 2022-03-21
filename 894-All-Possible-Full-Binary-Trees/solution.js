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
 var allPossibleFBT = function(n) {
    
    let memo = new Map()
    let fetchAllFullBSTs = function(n) {
        let ans = new Array()
        if(memo.has(n)) {
           return memo.get(n)
        }
        if(n ==1) {
            let node = new TreeNode(0,null,null)
            ans.push(node)
        }
        if((n&1) === 1) {
            for(let x = 0; x < n; x++) {
                let y = n - 1 - xc
                for( let left of fetchAllFullBSTs(x)) {
                    for( let right of fetchAllFullBSTs(y)) {
                        let node = new TreeNode(0,null,null)
                        node.left = left
                        node.right = right
                        ans.push(node)
                    }
                }
            }
        }
        memo.set(n,ans)
        return ans
    }
    
    return fetchAllFullBSTs(n)
};
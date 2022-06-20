/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
    
    let output = []
    let maxDepth = 1
    let dfs = function(el, depth) {
        //console.log("el = " , el, typeof el, Object.getOwnPropertyNames(el))
        maxDepth = Math.max(maxDepth, depth)
        if(el.isInteger()) {
            //console.log("el = " + el.getInteger())
            output.push([el.getInteger(), depth])
        } else {
            for(let nel of el.getList()) {
                dfs(nel, depth+1)
            }
        }
    }
    
    for(let el of nestedList) {
        dfs(el, 1)
    }
    
    //console.log(output)
    let ans = 0
    for(let op of output) {
        let wt = maxDepth - (op[1]) + 1
        ans += (op[0] * wt)
    }
    return ans
};
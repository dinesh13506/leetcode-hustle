/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    
    let n = arr.length
    let visited = new Array(n)
    visited.fill(false)
    
    let dfs = function(index) {
        if(index < 0 || index >=n ) return false
        if(arr[index] == 0) return true
        visited[index] = true
        
        let neigbors = [index + arr[index], index - arr[index]]
        let ans = false
        for(let neigbor of neigbors) {
            if(neigbor < 0 || neigbor >=n) {
                continue
            }
            if(visited[neigbor]) {
                continue
            }
            ans = ans | dfs(neigbor)
        }
        return ans
        
    }
    return dfs(start)
};
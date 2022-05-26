/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    
    let visited = new Map()
    let count = 0
    let ans = []
    
    let f = function(num, arr) {
        if(arr.length == n) {
            count++
            if(count == k) {
               ans.push(arr.slice()) 
            }
            return
        }
        for(let i = 1; i <= n; i++) {
            if(count >= k) {
                break
            }
            if(visited.has(i) == false || visited.get(i) == false) {
                visited.set(i, true)
                arr.push(i)
                f(i+1, arr)
                visited.set(i, false)
                arr.pop()
            }
        }
    }
    
    f(1,[])
    //console.log(ans)
    return ans[0].join('')
};
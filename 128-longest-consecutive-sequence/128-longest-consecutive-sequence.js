/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    let set = new Set()
    nums.sort(function(a,b) {
        return b - a
    })
    for(let num of nums) {
        set.add(num)
    }
    
    let map = new Map()
    for(let num of nums) {
        if(set.has(num-1)) {
            map.set(num, num-1)
        } else {
             map.set(num, null)
        }
    }
    
    //console.log(map)
    let visited = new Map()
    let ans = 0
    for(let num of nums) {
        if(visited.has(num)) {
            continue
        }
        let count = 1
        let x = num
        visited.set(x, true)
        while( map.get(x) != null && !visited.has(map.get(x)) ) {
            count++
            x = map.get(x)
            visited.set(x, true)
        }
        ans = Math.max(ans, count)
    }
    return ans
};
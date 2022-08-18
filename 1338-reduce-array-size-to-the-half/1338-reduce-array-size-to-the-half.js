/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    
    let map = new Map()
    for(let num of arr) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    //console.log(map)
    let nums = [... map.keys()]
    nums.sort((a,b) => {
        if(map.get(a) > map.get(b)) {
            return -1
        }
        else if(map.get(a) < map.get(b)) {
            return 1
        }
        return 0
    })
    //console.log(nums)
    
    let len = arr.length
    let i = 0
    while(i < nums.length) {
        let count = map.get(nums[i])
        //console.log(len, count)
        len = len - count
        i++
        if(len <= arr.length/2) break
    }
    return i
};
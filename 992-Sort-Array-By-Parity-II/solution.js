/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {
    
    class Pair {
        constructor(x,y) {
            this.x = x
            this.y = y
        }
    }
    
    let pairs = []
    let i = 0
    while(i < nums.length) {
        if( (nums[i] & 1) !== 0 ) {
            let pair = new Pair(i,0)
            pairs.push(pair)
        }
        i = i + 2
    }
    let j = 1
    let p = 0
    while( j < nums.length) {
        if( (nums[j] & 1) == 0 ) {
            let pair = pairs[p]
            p++
            pair.y = j
        }
        j = j + 2
    }    
    while(pairs.length) {
        let p = pairs.pop()
        let temp = nums[p.x]
        nums[p.x] = nums[p.y]
        nums[p.y] = temp
    }
    return nums
};
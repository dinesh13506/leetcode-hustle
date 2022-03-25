/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    
    let memo = new Map()
    let maxCost = function(h,cost) {
        if(h == 0) {
            return cost[h]
        }
        if(h==1) {
            return Math.max(cost[0],cost[1])
        }
        if(memo.has(h) === false) {
            let c = Math.max(cost[h] + maxCost(h-2,cost), maxCost(h-1,cost))
            memo.set(h,c)
        }
        return memo.get(h)
    }
    
    if( nums.length === 1 ) {
        return nums[0]
    }
    let first = nums[0]
    let last = nums[nums.length-1]
    
    //with first
    nums.pop()
    let costWithFirst = maxCost(nums.length-1,nums)
    //without first
    nums.push(last)
    nums.shift()
    memo = new Map()
    let costWithoutFirst = maxCost(nums.length-1,nums)
    return Math.max(costWithFirst ,costWithoutFirst)
};
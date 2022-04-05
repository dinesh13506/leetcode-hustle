/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    
    let n = nums.length
    nums.sort(function(a,b) {return a- b})
    //console.log(nums)
    let smallest = new Array(n)
    smallest[0] = Infinity
    for(let i = 1; i < n; i++) {
        smallest[i] = Math.min(nums[i-1],smallest[i-1])
    }
    //console.log(smallest)
    let largest = new Array(n)
    largest[n-1] = -Infinity
    for(let j = n-2; j>=0; j--) {
        largest[j] = Math.max(largest[j+1],nums[j+1])
    }
    //console.log(largest)
    let ans = 0
    for(let i = 0; i <n; i++) {
        if(nums[i] > smallest[i] && nums[i] < largest[i]) {
            ans++
        }
    }
    return ans
};
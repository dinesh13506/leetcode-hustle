/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort(function(a,b) { return a - b})
    let isArithmatic = function(nums) {
        if(nums.length<=1) return false
        let diff = nums[1] - nums[0]
        for(let i = 2; i < nums.length; i++) {
            if(nums[i] - nums[i-1] != diff) return false
        }
        return true
    }
    return isArithmatic(arr)
};

//time complexity O(nlogn)
//space complexity O(1) and depends on sorting algo
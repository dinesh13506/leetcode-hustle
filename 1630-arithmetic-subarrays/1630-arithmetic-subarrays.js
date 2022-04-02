/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    
    let result = []
    let queries = l.length
    let isArithmatic = function(arr) {
        if(arr.length <= 1) return false
        let diff = arr[1] - arr[0]
        for(let i = 2; i < arr.length; i++) {
            if(arr[i] - arr[i-1] != diff) {
                return false
            }
        }
        return true
    }
    for(let i = 0; i < queries; i++) {
        let start = l[i]
        let end = r[i]
        let arr = []
        for(let j = start; j<= end; j++) {
            arr.push(nums[j])
        }
        arr.sort(function(a,b) { return a - b})
        result.push(isArithmatic(arr))
    }
    return result

    
};
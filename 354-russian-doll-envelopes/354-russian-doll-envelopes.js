/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    
    envelopes.sort(function(e1, e2) {
        if(e1[0] == e2[0]) {
            return e2[1] - e1[1]
            
        }
        return e1[0] - e2[0]
    })
    //console.log(envelopes)
    let heights = []
    for(let env of envelopes) {
        heights.push(env[1])
    }
    return lengthOfLIS(heights)
     
};


var lengthOfLIS = function(nums) {
    let n = nums.length
    let dp = new Array(n)
    let temp = []
    
    //find index where target is found or just greater value is found
    let lowerBound = function(target) {
        let start = 0, end = temp.length - 1, ans = -1
        while(start <= end) {
            let mid = parseInt((start + end) / 2)
            if(temp[mid] === target) {
                ans = mid
                break
            } else if(target < temp[mid]) {
                ans = mid
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        return ans
    }
    
    let len = 0
    temp.push(nums[0])
    len++
    for(let i = 1; i < n; i++) {
        
        if(nums[i] > temp[temp.length-1]) {
            temp.push(nums[i])
            len++
        } else {
            let idx = lowerBound(nums[i])
            temp[idx] = nums[i]
        }
    }
    return len
};

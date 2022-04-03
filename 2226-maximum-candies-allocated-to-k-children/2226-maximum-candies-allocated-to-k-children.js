/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    let sum = 0
    let ans = 0
    for(let candy of candies) {
        sum = sum + candy
    }
    
    let binarySearch = function(low,high) {
        while(low<=high) {
            let mid = parseInt((low+high)/2)
            if(isValid(mid)) {
                ans = mid
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    
    let isValid = function(mid) {
        let c = 0
        for(let i = 0; i < candies.length; i++) {
            c = c + parseInt(candies[i]/mid)
            if(c>=k) return true
        }
        return false
    }
    
    binarySearch(1,sum)
    return ans
    
    
};
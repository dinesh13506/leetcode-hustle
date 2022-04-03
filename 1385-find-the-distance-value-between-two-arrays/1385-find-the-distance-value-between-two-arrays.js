/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let ans = 0
    let binarysearch = function(target,start,end) {
        while(start<= end) {
            let mid = parseInt((start+end)/2)
            if(arr2[mid] == target) {
                return 0
            } else if(target < arr2[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        let diff1 = Infinity
        if(start < arr2.length) {
             //console.log(arr2[start])
             diff1 = Math.abs(arr2[start]-target)
        }
        let diff2 = Infinity
        if(end >= 0) {
            //console.log(arr2[end])
            diff2 = Math.abs(arr2[end]-target)
        }
        return Math.min(diff1,diff2)
    }
    arr2.sort(function(a,b) { return a - b})
    for(let num of arr1) {
        if(binarysearch(num,0,arr2.length-1) > d) {
            ans++
        }
    }
    return ans
};
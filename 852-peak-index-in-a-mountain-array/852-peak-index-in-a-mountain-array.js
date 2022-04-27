/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    //[true,true,true,false,false,false]
    let left = 0 , right = arr.length - 1
    while(left < right) {
        let mid = parseInt((left+right)/2)
        if(arr[mid] > arr[mid+1]) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return right
};
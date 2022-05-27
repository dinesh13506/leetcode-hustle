/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    
    let n = arr.length
    let start = 0, end = n-1
    while(start <= end) {
        let mid = start + parseInt((end -start)/2)
        if(mid > 0 && mid < n-1) {
            if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) {
                return mid
            }
            else if(arr[mid-1] > arr[mid]) {
                end = mid -1
            }
            else {
                start = mid + 1
            }
        } else {
            if(mid == 0) {
                if(mid < n-1) {
                    if(arr[mid] > arr[mid+1]) {
                        return mid
                    } else {
                        return mid + 1
                    }
                } else {
                    return mid
                }
            } else {
                if(mid == n-1) {
                    if(mid -1 >= 0) {
                        if(arr[mid] > arr[mid-1]) {
                            return mid - 1
                        } else {
                            return mid
                        }
                    } else {
                        return mid
                    }
                }
            }
        }
            
    }
};
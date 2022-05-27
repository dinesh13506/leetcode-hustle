/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    
    let n = mountainArr.length()
    let start = 0, end = n - 1
    let peek = -1
    while(start <= end) {
        let mid = start + parseInt((end - start)/2)
        //console.log(start,end,mid)
        if(mid > 0 && mid < n-1) {
            let curr = mountainArr.get(mid)
            let left = mountainArr.get(mid-1)
            let right = mountainArr.get(mid+1)
            if( curr > left && curr > right ) {
                peek = mid
                break
            }
            else if(left > curr) {
                end = mid -1
            } else  {
                start = mid + 1
            }
        } else {
            if(mid == 0) {
                if(mid + 1 < n) {
                    let curr = mountainArr.get(mid)
                    let right = mountainArr.get(mid+1)
                    if(curr > right) {
                        peek = mid
                        break
                    } else {
                        peek = mid + 1
                        break
                    }
                } else {
                    peek = mid
                    break
                }
            }
            else if(mid == n-1) {
                if(mid-1 >= 0) {
                     let curr = mountainArr.get(mid)
                     let left = mountainArr.get(mid-1)
                     if(curr > left) {
                         return mid
                         break
                     } else {
                         return mid - 1
                         break
                     }
                } else {
                    return mid
                    break
                }
            }
        }
    }
    
    if(mountainArr.get(peek) == target) {
        return peek
    }
    
    //console.log("peek => ", peek)
    let ans = -1
    let leftsearch = function(start, end) {
        
        while(start <= end) {
            let mid = start + parseInt((end - start)/2)
            let curr = mountainArr.get(mid)
            if(curr == target) {
                ans =  mid
                break
            } else if(target < curr) {
                end = mid - 1
            }
            else {
                start = mid + 1
            }
        }
    }
    
    let rightsearch = function(start, end) {
        while(start <= end) {
            let mid = start + parseInt((end - start)/2)
            let curr = mountainArr.get(mid)
            if(curr == target) {
                ans =  mid
                break
            } else if(target < curr) {
                start = mid + 1
            }
            else {
                end = mid - 1
            }
        }
    }
    
    leftsearch(0, peek-1)
    if(ans!= -1) {
        return ans
    }
    rightsearch(peek+1, n-1)
    return ans
};
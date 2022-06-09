/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    
    let arr = []
    for(let i = 0; i < s.length; i++) {
        let ch = s[i]
        if(ch == c) {
            arr.push(i)
        }
    }
    
    
    let binarysearch = function(index) {
        let start = 0 , end = arr.length - 1
        let distance = Infinity
        while(start <= end) {
            let mid = parseInt((start+end)/2)
            if(arr[mid] > index) {
                distance = Math.min(distance, Math.abs(arr[mid] - index))
                end = mid - 1
            } else {
                distance = Math.min(distance, Math.abs(arr[mid] - index))
                start = mid + 1
            }
        }
        return distance
    }
    
    let ans = []
    for(let i = 0; i < s.length; i++) {
        if(s[i] == c) {
            ans.push(0)
        } else {
            ans.push(binarysearch(i))
        }
    }
    return ans
};
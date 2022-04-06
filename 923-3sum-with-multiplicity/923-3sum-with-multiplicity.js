/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    
    let ans = 0
    arr.sort(function(a,b) { return a - b})
    let len = arr.length
    for(let i = 0; i < len; i++) {
        let T = target - arr[i]
        let j = i + 1, k = arr.length - 1
        while(j < k) {
            if(arr[j] + arr[k] < T) {
                j++
            } else if(arr[j] + arr[k] > T) {
                k--
            } else if(arr[j] != arr[k]) {
                let left = 1, right = 1
                while(j + 1 < k && arr[j] == arr[j+1]) {
                    left++
                    j++
                }
                while((k-1) > j && arr[k] == arr[k-1]) {
                    k--
                    right++
                }
                ans += (left * right)
                ans %= (Math.pow(10,9) + 7)
                j++
                k--
            } else {
                let m = (k-j)+1
                ans +=  ( (m) *(m-1) ) /2 
                ans %= (Math.pow(10,9) + 7)
                break
            }
        }
    }
    return ans
};
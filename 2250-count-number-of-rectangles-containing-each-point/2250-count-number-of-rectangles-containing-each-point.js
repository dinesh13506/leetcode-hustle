/**
 * @param {number[][]} rectangles
 * @param {number[][]} points
 * @return {number[]}
 */
var countRectangles = function(rectangles, points) {
    
    let dp = new Array(101) // h >= 1 and h <= 100
    let result = []
    for(let h = 0;  h<=100; h++) {
        dp[h] = []
    }
    //pre calculate
    for(let rect of rectangles) {
        let l = rect[0]
        let h = rect[1]
        dp[h].push(l)
    }
    //console.log(dp)
    for(let h = 0;  h<=100; h++) {
        dp[h].sort(function(a,b) {
            return a - b
        })
    }
    
    let find = function(arr, target) {
        let start = 0, end = arr.length-1, ans = 0
        while(start <= end ){
            let mid = parseInt((start+end)/2)
            if(target <= arr[mid]) {
                ans = (arr.length - mid)
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        return ans
    }
    for(let point of points) {
        let x = point[0]
        let y = point[1]
        let ans = 0
        for(let h = y; h<= 100; h++) {
            ans = ans + find(dp[h],x)
        }
        result.push(ans)
    }
    return result
    

};
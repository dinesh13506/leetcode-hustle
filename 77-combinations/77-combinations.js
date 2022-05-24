/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    
    let result = []
    let f = function(index, arr) {
        if(index ==  n + 1 ) {
            if(arr.length == k) {
                result.push(arr.slice())
            }
            return
        }
        
        //take
        arr.push(index)
        f(index+1, arr)
        //not take
        arr.pop()
        f(index+1, arr)
    }
    f(1, [])
    return result
    
    
};
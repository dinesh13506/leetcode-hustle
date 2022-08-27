/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    
    let sum = 0
    let arr = new Array(n)
    for(let i = 0; i < n; i++) {
        let value = (2 * i) + 1
        arr[i] = value
        sum += value
    }
    let target = parseInt(sum/n)
    let inc = 0, dec = 0
    for(let i = 0; i < n; i++) {
        if(arr[i] < target) {
            inc += target - arr[i]
        }else if(arr[i] > target) {
            dec += arr[i] - target
        }
    }
    
    return (inc + dec) / 2
    
};
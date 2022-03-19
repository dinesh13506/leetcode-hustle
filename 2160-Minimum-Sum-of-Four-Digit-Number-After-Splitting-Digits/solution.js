/**
 * @param {number} num
 * @return {number}
 */
 var minimumSum = function(num) {
    
    let arr = []
    while(num>=0 && arr.length<4) {
        arr.push(num%10)
        num = parseInt(num/10)
    }
    arr.sort(function(a,b) { return a - b })
    let num1 = parseInt(arr[0] +'' +arr[2])
    let num2 = parseInt(arr[1] +'' +arr[3])
    
    return num1 + num2
};
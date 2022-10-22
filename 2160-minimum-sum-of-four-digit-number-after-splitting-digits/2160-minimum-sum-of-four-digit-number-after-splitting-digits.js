/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    
    let str = "" + num;
    if(str.length < 4) {
        while(str.length != 4) {
            str = '0' + str;
        }
    }
    
    let arr = str.split('');
    arr.sort((a,b) => { return parseInt(a) - parseInt(b)});
    //console.log(arr)
    
    let num1 = arr[0] + arr[3];
    let num2 = arr[1] + arr[2];
    //console.log(num1, num2)
    
    return parseInt(num1) + parseInt(num2);
};
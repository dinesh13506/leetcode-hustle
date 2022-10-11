/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let arr = new Array(n+1);
    arr[0] = 0; // given
    arr[1] = 1; //given
    for(let i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
};
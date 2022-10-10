/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    let arr = palindrome.split('');
    const n = arr.length;
    if(arr.length == 1) {
        return "";
    }
    
    for(let i = 0; i < parseInt(n/2); i++) {
        if(arr[i] != 'a') {
            arr[i] = 'a';
            return arr.join("");
        }
    }
    arr[n-1] = 'b';
    return arr.join("");
};
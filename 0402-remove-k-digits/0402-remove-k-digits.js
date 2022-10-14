/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const n = num.length;
    let stack = [];
    for(let ch of num) {
        if(stack.length == 0) {
            stack.push(ch);
            continue;
        }
        while(stack.length > 0 && k > 0 && ch < stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        stack.push(ch);
    }
    
    while(k > 0 && stack.length > 0) {
        k--;
        stack.pop();
    }
    
    stack = stack.reverse()
    
    while(stack.length > 0 && stack[stack.length - 1] == 0) {
        stack.pop();
    }
    stack = stack.reverse();
    return stack.length <= 0 ? "0" : stack.join('');
};
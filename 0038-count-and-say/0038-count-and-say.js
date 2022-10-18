/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
    let say = (str) => {
        //console.log(str);
        let stack = [];
        for(let ch of str) {
            if(stack.length <= 0) {
                stack.push([ch,1]);
                continue;
            } else {
                let top = stack[stack.length-1];
                if(ch == top[0]) top[1]++;
                else stack.push([ch,1]);
            }
        }
        
        //console.log(stack);
        let ans = [];
        for(let el of stack) {
            ans.push(el[1]);
            ans.push(el[0]);
        }
        return ans.join('');
    }
    let dp = (i) => {
        if( i == 1) {
            return "1";
        }
        
        return say(dp(i-1));
    }
    return dp(n);
};
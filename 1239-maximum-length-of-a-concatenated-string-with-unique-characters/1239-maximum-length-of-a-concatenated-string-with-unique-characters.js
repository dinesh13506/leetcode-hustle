/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    
    const n = arr.length;
    let dp = (i, output) => {
        if(i >= n) {
            //console.log(output, output.length);
            return output.length;
        }
        //not take
        let ans1 = dp(i + 1, output);
        let ans2 = 0;
        
        //take
        //check if we can take
        let map = new Map();
        for(let ch of output) {
            map.set(ch, (map.get(ch) || 0) + 1);
        }
        let flag = true;
        for(let ch of arr[i]) {
           if(map.has(ch)) {
               flag = false;
               break;
           } else {
               map.set(ch, (map.get(ch) || 0) + 1);
           }
        }
        if(flag == true) {
            output += arr[i];
            ans2 = dp(i + 1, output)
        }
        return Math.max(ans1, ans2);
    }
    
    return dp(0, "");
};
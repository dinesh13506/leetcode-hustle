/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
    if(k == 1) {
        let ans = s;
        for(let i = 0; i < s.length; i++) {
            let temp = s.substring(i) + s.substring(0, i);
            if(temp.localeCompare(ans) < 0) {
                ans = temp;
            }
        }
        return ans;
    } else {
        let arr = s.split('');
        arr.sort();
        return arr.join('');
    }
};
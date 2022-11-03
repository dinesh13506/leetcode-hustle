/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    let ans = 0;
    
    let map = new Map();
    for(let w of words) {
        map.set(w, (map.get(w) || 0) + 1);
    }
 
    /* take w and its rev */
    for(let w of map.keys()) {
        if(w[0] != w[1]) {
            let rev = w[1] + w[0];
            if(map.get(w) > 0 && map.get(rev) > 0) {
                let min = Math.min(map.get(w), map.get(rev));
                ans = ans + (min * 4);
                map.set(w, map.get(w) - min);
                map.set(rev, map.get(rev) - min);
            }
        }
    }
    
    /* take w which has same chars*/
    for(let w of map.keys()) {
        if(w[0] == w[1]) {
            if(map.get(w) >=2) {
                let pairs = parseInt(map.get(w)/2);
                ans = ans + (pairs * 4);
                map.set(w, map.get(w) - pairs * 2);
            }
        }
    }
    /* check if any w with same char , use it once */
    for(let w of map.keys()) {
        if(w[0] == w[1]) {
            if(map.get(w) == 1) {
                ans = ans + 2;
                map.set(w, map.get(w) - 1);
                break;
            }
        }
    }
    return ans;
};
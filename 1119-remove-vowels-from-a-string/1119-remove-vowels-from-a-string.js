/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    let set = new Set(['a','e','i','o','u']);
    let ans = [];
    for(let ch of s) {
        if(set.has(ch)) {
            continue;
        }
        ans.push(ch);
    }
    return ans.join("");
};
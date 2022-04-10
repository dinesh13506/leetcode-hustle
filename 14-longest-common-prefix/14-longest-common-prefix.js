/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return 0
    let prefix = strs[0]
    for(let i = 0; i < strs.length; i++) {
        //console.log(strs[i])
        while(strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0,prefix.length-1)
            //console.log("prefix = " + prefix)
        }
    }
    return prefix
    
};
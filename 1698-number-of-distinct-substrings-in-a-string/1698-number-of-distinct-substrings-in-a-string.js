/**
 * @param {string} s
 * @return {number}
 */
var countDistinct = function(s) {
    
    let n = s.length
    let set = new Set()
    for(let start = 0; start < n; start++) {
        let str = ""
        for(let end = start; end < n; end++) {
            str = str + s[end]
            if(set.has(str) == false) {
                set.add(str)
            }
        }
    }
    
    //console.log(set)
    return set.size
};
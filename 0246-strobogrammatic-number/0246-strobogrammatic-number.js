/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    let map = new Map();
    map.set("0","0");
    map.set("1","1");
    map.set("6","9");
    map.set("8","8");
    map.set("9","6");
    let input = "" + num;
    let output = [];
    for(let ch of input) {
        if(map.has(ch)) {
            output.push(map.get(ch))
        } else {
            return false;
        }
    }
    return output.reverse().join("") == input;
    
};
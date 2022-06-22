
var TwoSum = function() {
    this.arr = []
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.arr.push(number)
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    return this.check(value)
};


/** 
 * @param {number} target
 * @return {boolean}
 */
TwoSum.prototype.check = function(target) {
    let map = new Map()
    for(let num1 of this.arr) {
        let num2 = target - num1
        if(map.has(num2)) {
            return true
        }
        map.set(num1,true)
    }
    return false
};


/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
/**
 * @param {number} maxNumbers
 */
var PhoneDirectory = function(maxNumbers) {
    this.dict = new Array(maxNumbers)
    this.dict.fill(-1)
};

/**
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
    //console.log(this.dict)
    for(let i = 0; i < this.dict.length; i++) {
        if(this.dict[i] === -1) {
            this.dict[i] = i
            return i
        }
    }
    return -1
};

/** 
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
    return this.dict[number] === -1 ? true: false
};

/** 
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function(number) {
    this.dict[number] = -1
};

/** 
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
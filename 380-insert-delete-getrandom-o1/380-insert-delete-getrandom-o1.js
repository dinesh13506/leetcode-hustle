
var RandomizedSet = function() {
    this.indexMap = new Map()
    this.nums = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.indexMap.has(val)) {
        return false
    }
    this.indexMap.set(val, this.nums.length)
    this.nums.push(val)
    //console.log(this.nums)
    //console.log(this.indexMap)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.indexMap.has(val)) {
        return false
    }
    let index = this.indexMap.get(val)
    let lastIndex = this.nums.length-1
    let t = this.nums[index]
    this.nums[index] = this.nums[lastIndex]
    this.nums[lastIndex] = t
    this.indexMap.set(this.nums[index],index)
    this.nums.pop()
    this.indexMap.delete(val)
    //console.log("deleted" , this.indexMap)
    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    
    let randomIndex = Math.floor(Math.random() * this.nums.length)
    return this.nums[randomIndex]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
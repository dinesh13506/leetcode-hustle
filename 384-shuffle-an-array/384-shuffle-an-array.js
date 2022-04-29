/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.orig = nums.slice()
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.orig
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let shuffled = this.orig.slice()
    return shuffled.map( (num) => ({ value : num, rand : Math.random() })).sort(function(a,b) { return a.rand - b.rand}).map((obj) => (obj.value))
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if(this.map.has(num)) {
            this.map.get(num).push(i)
        } else {
            this.map.set(num, [i])
        }
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    
    let indexList = this.map.get(target)
    
    let rand = Math.random()
    let i = Math.floor(rand * indexList.length)
    return indexList[i]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
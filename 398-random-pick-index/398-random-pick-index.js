/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let indexArr = []
        if(this.map.has(num)) {
            indexArr = this.map.get(num)
            indexArr.push(i)
        } else {
            indexArr.push(i)
        }
        this.map.set(num,indexArr)
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let indexArr = this.map.get(target)
    let index = Math.floor(Math.random() * indexArr.length) //0 to indexArr.length(exclusive)
    //console.log(target, indexArr,index)
    return indexArr[index]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
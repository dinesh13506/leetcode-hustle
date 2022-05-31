/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let n = nums.length
    let set = new Set()
    for(let i = 0; i < n; i++) {
        nums[i] = parseInt(nums[i],2)
        set.add(nums[i])
    }
    //console.log(nums)
    for(let num = 0; num < (1 << n); num++) {
        if(set.has(num) == false) {
            let bin = num.toString(2)
            while(bin.length < n) {
                bin = "0" + bin
            }
            return bin
        }
    }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if(nums.length == 1) {
        return nums[0]
    }
    let arr1 = [], arr2 = []
    for(let i = 0; i < nums.length; i++) {
        if(i !=0 ) {
            arr1.push(nums[i])
        }
        if(i != nums.length -1) {
            arr2.push(nums[i])
        }
    }
    
    return Math.max(maxMoney(arr1), maxMoney(arr2))
    
};

let maxMoney = function(nums) {
    let prev2 = 0
    let prev = nums[0]
    for(let i = 1; i < nums.length; i++) {
        let take = nums[i] + prev2
        let notTake = 0 + prev
        let curri = Math.max(take,notTake)
        prev2 = prev
        prev = curri
    }
    return prev     
}
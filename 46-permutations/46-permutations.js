/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let myfun = function(nums) {
        if(nums.length == 1) {
            return [nums]
        }
        let result = []
        for(let num of nums) {
            let numsNew = []
            for(let x of nums) {
                if(x!= num) {
                    numsNew.push(x)
                }
            }
            //console.log(num,numsNew)
            let pnc = myfun(numsNew)
            for(let temp of pnc) {
                temp.push(num)
            }
            //console.log("pnc = " , pnc)
            result.push(...pnc)
        }
        return result
    }
    
    
    return myfun(nums)
};
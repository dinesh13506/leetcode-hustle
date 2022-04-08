/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    
    //question of biotonic subsequence
    let len = nums.length
    let lis = new Array(len)
    let lds = new Array(len)
    lis[0] = 1
    for(let i = 1; i < len; i++) {
        lis[i] = 1
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                lis[i] = Math.max(lis[i],lis[j] + 1)
            }
        }
    }
    
    lds[len-1] = 1
    for(let i = len-2; i>=0; i--) {
        lds[i] = 1
        for(let j = i + 1; j< len;j++) {
            if(nums[i] > nums[j]) {
                lds[i] = Math.max(lds[i],lds[j] + 1)
            }
        }
    }
    //console.log(lis)
    //console.log(lds)
    
    let maxBioTonicLen = -Infinity
    for(let i = 1; i <len-1; i++) {
        if(lis[i] > 1 && lds[i] > 1) {
            maxBioTonicLen = Math.max(maxBioTonicLen,lis[i] + lds[i] - 1)
        } 
        
    }
    //console.log(maxBioTonicLen)
    return len - maxBioTonicLen
};
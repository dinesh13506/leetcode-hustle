/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    
    let min = Infinity
    let max = -Infinity
    
    let minpos = -1
    let maxpos = -1
    
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if(num < min) {
            minpos = i
            min = num
        }
        
        if(num > max) {
            maxpos = i
            max = num
        }
    }
    //console.log(minpos,maxpos,nums.length)
    
    //delete from left
    let maxindex = Math.max(minpos,maxpos)
    let leftops = maxindex + 1
    
    //delete from right
    let minindex = Math.min(minpos,maxpos)
    let rightops = nums.length - minindex
    
    //delete min from left and max from right
    let leftrightops = Math.min(minpos+1 + nums.length - maxpos, maxpos+1 + nums.length - minpos)
    
    //console.log(leftops, rightops, leftrightops)
    
    return Math.min(leftops, Math.min(rightops, leftrightops))
    
    
    
    
};
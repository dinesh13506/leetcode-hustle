/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a,b) => { return a - b});
    const n = nums.length;
    if(n == 1) {
        return 0;
    }
    if( n % 2 != 0) {
        let mid = nums[(n - 1) / 2];
        let steps = 0;
        for(let num of nums) {
            steps += Math.abs(mid - num);
        }
        return steps;
    } else {
        let mid1 = nums[parseInt((n - 1) / 2)];
        let mid2 = nums[n / 2];
        
        let s1 = 0, s2 = 0;
        for(let num of nums) {
            s1 += Math.abs(mid1 - num);
        }
        for(let num of nums) {
            s2 += Math.abs(mid2 - num);
        }
        return Math.min(s1, s2);
    }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    
    const n = nums.length
    nums.sort((a,b) => {
        return a == b ? 0 : (a > b ? 1 : -1)
    })
    
    let getmoves = (midIndex) => {
        let moves = 0
        const mid = midIndex
        let i = midIndex, j = midIndex
        while(i >= 0 && j < n) {
            moves += (nums[mid] - nums[i])
            moves += (nums[j] - nums[mid])
            i--
            j++
        }
        
        while(i >= 0) {
            moves += (nums[mid] - nums[i])
            i--
        }
        while(j < n) {
            moves += (nums[j] - nums[mid])
            j++
        }
        return moves
    }
    
    if(n%2 == 0) {
        let mid1 = n / 2 - 1
        let mid2 = n / 2
        return Math.min(getmoves(mid1), getmoves(mid2))
    } else {
        let mid1 = Math.floor(n/2)
        return getmoves(mid1)
    }
};
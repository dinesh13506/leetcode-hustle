/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let answer = 0
    let countMap = new Map()
    for(let i = 0; i < nums.length; i++) {
        let count = countMap.get(nums[i]) || 0
        count += 1
        countMap.set(nums[i], count)
    }
    //console.log(countMap)
    for(let num of countMap.keys()) {
        let x = num, y = k - num
        let countX = countMap.get(x) || 0
        let countY = countMap.get(y) || 0
        if(x == y) {
            answer += parseInt(countX / 2)
            countMap.set(x, 0)
        } else {
            let min = Math.min(countX, countY)
            if(countX > 0) {
                countMap.set(x, countX - min)
            }
            if(countY > 0) {
                countMap.set(y, countY - min)
            }
            answer += min
        }
    }
    return answer
};
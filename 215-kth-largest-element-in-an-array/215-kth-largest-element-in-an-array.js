/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
   
    let minpq = new MinPriorityQueue()
    for(let i = 0; i < k; i++) {
        minpq.enqueue(nums[i])
    }
    
    for(let i = k; i < nums.length; i++) {
        let top = minpq.front().element
        if(top < nums[i]) {
            minpq.dequeue()
            minpq.enqueue(nums[i])
        }
    }
    return minpq.front().element
};
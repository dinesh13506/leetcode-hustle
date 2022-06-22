/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class MinHeap {
    constructor() {
        this.arr = []
        this.size = 0
    }
    
    swap(i,j) {
        this.arr[i] = this.arr[i] ^ this.arr[j]
        this.arr[j] = this.arr[i] ^ this.arr[j]
        this.arr[i] = this.arr[i] ^ this.arr[j]
    }
    
    heapify(i) {
        let smallest = i
        let left = 2 * i  + 1
        let right = left + 1
        if(left < this.size && this.arr[left] < this.arr[smallest]) {
            smallest = left
        }
        if(right < this.size && this.arr[right] < this.arr[smallest]) {
            smallest = right
        }
        if(smallest != i) {
            this.swap(i, smallest)
            this.heapify(smallest)
        }
    }
    
    bottomUp(i) {
        let parent = parseInt((i-1)/2)
        if(this.arr[parent] > this.arr[i]) {
            this.swap(i, parent)
            this.bottomUp(parent)
        }
    }
    
    insert(num) {
        this.arr.push(num)
        this.size++
        this.bottomUp(this.size -1)
    }
    
    extractMin() {
        let min = this.arr[0]
        this.swap(0, this.size-1)
        this.arr.pop()
        this.size--
        this.heapify(0)
        return min
    }
    
    getMin() {
        return this.arr[0]
    }
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubsequence = function(nums, k) {
    
    let minHeap = new MinHeap()
    for(let i=0; i < nums.length; i++) {
        if(minHeap.size < k) {
            minHeap.insert(nums[i])
        } else {
            if(nums[i] > minHeap.getMin()) {
                minHeap.extractMin()
                minHeap.insert(nums[i])
            }
        }
    }
    let map = new Map()
    for(let num of  minHeap.arr) {
        map.set(num, (map.get(num) || 0 ) + 1)
    }
    
    let ans = []
    for(let num of nums) {
        if(map.has(num) && map.get(num) > 0) {
            ans.push(num)
            map.set(num, map.get(num) - 1)
        }
    }
    return ans
};
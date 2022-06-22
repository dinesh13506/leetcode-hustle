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
var findKthLargest = function(nums, k) {
    
    let minHeap = new MinHeap()
    for(let i=0; i < nums.length; i++) {
        //console.log(minHeap.arr)
        if(minHeap.size < k) {
            minHeap.insert(nums[i])
        } else {
            if(nums[i] > minHeap.getMin()) {
                minHeap.extractMin()
                minHeap.insert(nums[i])
            }
        }
    }
    
    return minHeap.getMin()
};
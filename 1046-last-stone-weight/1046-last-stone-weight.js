/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
    let maxheap = new MaxHeap()
    let length = stones.length
    for(let i = 0; i < length; i++) {
        maxheap.insert(stones[i])
    }
    while(maxheap.size() > 1) {
        let firstLargest = maxheap.extractMax()
        let secondLargest = maxheap.extractMax()
        if(firstLargest != secondLargest) {
            maxheap.insert(firstLargest - secondLargest)
        }
    }
    return maxheap.size() == 1 ? maxheap.extractMax() : 0
    
};


class MaxHeap {
    constructor() {
        this.list = []
        this.len = 0
    }
    size() {
        return this.len
    }
    swap(i,j) {
        let temp = this.list[i]
        this.list[i] = this.list[j]
        this.list[j] = temp
    }
    heapify(i) {
        let largest = i
        let left = 2 * i + 1
        let right = 2 * i + 2
        
        if(left < this.len && this.list[left] > this.list[largest]) {
            largest = left
        }
        if(right < this.len && this.list[right] > this.list[largest]) {
            largest = right
        }
        
        if(largest != i) {
            this.swap(i,largest)
            this.heapify(largest)
        }
    }
    insert(num) {
        this.list.push(num)
        this.len++
        for(let i = parseInt(this.len / 2 ) - 1; i >= 0; i--) {
            this.heapify(i)
        }
    }
    
    extractMax() {
        let max = this.list[0]
        this.swap(0, this.len-1)
        this.list.pop()
        this.len--
        this.heapify(0)
        return max
    }
}
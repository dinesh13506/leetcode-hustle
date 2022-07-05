class MaxHeap {
    constructor() {
        this.list = []
        this.size = 0
    }
    getsize() {
        return this.size
    }
    swap(i,j) {
        if(i!= j) {
            this.list[i] = this.list[i] ^ this.list[j]
            this.list[j] = this.list[i] ^ this.list[j]
            this.list[i] = this.list[i] ^ this.list[j]
        }
    }
    heapify(i) {
        let largest = i
        let left = 2 * i + 1
        let right = left + 1
        if(left < this.getsize() && this.list[left] > this.list[largest]) {
            largest = left
        }
        if(right < this.getsize() && this.list[right] > this.list[largest]) {
            largest = right
        }
        if(largest != i) {
            this.swap(i, largest)
            this.heapify(largest)
        }
    }
    
    buildUp(i) {
        let parent = parseInt((i-1)/2)
        if(this.list[i] > this.list[parent]) {
            this.swap(i,parent)
            this.buildUp(parent)
        }
    }
    
    insert(value) {
        this.list.push(value)
        this.size++
        this.buildUp(this.size - 1)
    }
    
    extractMax() {
        this.swap(0,this.size - 1)
        let max = this.list.pop()
        this.size--
        this.heapify(0)
        return max
    }
}


/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
    let maxheap = new MaxHeap()
    for(let stone of stones) {
        maxheap.insert(stone)
    }
    
    while(maxheap.getsize() > 1) {
        let max1 = maxheap.extractMax(), max2 = maxheap.extractMax()
        if(max1 != max2) {
            maxheap.insert(max1 - max2)
        }
    }
    return maxheap.extractMax()
};
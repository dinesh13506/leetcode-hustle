class MinHeap {
    constructor() {
        this.arr = []
        this.length = 0
    }
    swap(i,j) {
        this.arr[i] = this.arr[i] ^ this.arr[j]
        this.arr[j] = this.arr[j] ^ this.arr[i]
        this.arr[i] = this.arr[i] ^ this.arr[j]
    }
    
    bottomUp(i) {
        if(this.length <=1 ) {
            return
        }
        let parent = Math.floor((i-1)/2)
        if(this.arr[i] < this.arr[parent]) {
            this.swap(i,parent)
            this.bottomUp(parent)
        }
    }
    heapify(i) {
        let smallest = i
        let left = 2 * i  + 1
        let right = left + 1
        if(left < this.length && this.arr[left] < this.arr[smallest]) {
            smallest = left
        }
        if(right < this.length  && this.arr[right] < this.arr[smallest]) {
            smallest = right
        }
        if(smallest != i) {
            this.swap(i,smallest)
            this.heapify(smallest)
        }
    }
    
    insert(val) {
        this.arr.push(val)
        this.length++
        this.bottomUp(this.length-1)
    }
    
    extractMin() {
        let min = this.arr[0]
        //this.swap(0, this.length-1)
        this.arr[0] = this.arr[this.length-1]
        this.arr.pop()
        this.length--
        this.heapify(0)
        return min
    }
}


/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    
    let n = heights.length
    let minheap = new MinHeap()
    for(let i = 0; i < n-1; i++) {
        let curr = heights[i]
        let next = heights[i+1]
        let jump = next - curr
        if(jump > 0 ) {
            minheap.insert(jump)
        }
        if(minheap.arr.length > ladders) {
            let min = minheap.extractMin()
            bricks = bricks - min
        }
        if(bricks < 0) {
            return i
        }
    }
    return n-1
};
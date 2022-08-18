
var MedianFinder = function() {
    this.maxheap = new MaxPriorityQueue()
    this.minheap = new MinPriorityQueue()
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.maxheap.enqueue(num)
    this.minheap.enqueue(this.maxheap.dequeue().element)
    if(this.minheap.size() > this.maxheap.size()) {
        this.maxheap.enqueue(this.minheap.dequeue().element)
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.maxheap.size() <= this.minheap.size()) {
        let val1 = this.maxheap.front().element
        let val2 = this.minheap.front().element
        return (val1 + val2) / 2
    } else {
        let val1 = this.maxheap.front().element
        return val1
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
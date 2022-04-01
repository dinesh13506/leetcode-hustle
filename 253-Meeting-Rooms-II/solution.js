/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var minMeetingRooms = function(intervals) {
   
    intervals.sort(function(a,b) { return a[0] - b[0] })
    let length = intervals.length
    let minheap = new MinHeap()
    for(let i = 0; i < length; i++) {
        let minEndTime = minheap.getmin()
        let startTime = intervals[i][0]
        let endTime = intervals[i][1]
        if(!minEndTime) {
            minheap.insert(endTime)
        } else if(minEndTime <= startTime) {
            minheap.extractMin()
            minheap.insert(endTime)
        } else {
            minheap.insert(endTime)
        }
    }
    return minheap.getsize()
};

class MinHeap {
    constructor() {
        this.list = []
        this.size = 0
    }
    getsize() {
        return this.size
    }
    swap(i,j) {
        [this.list[i],this.list[j]] = [this.list[j],this.list[i]]
    }
    heapify(i) {
        let smallest = i
        let left = (2 * i) + 1
        let right = left + 1
        let size = this.getsize()
        if(left < size && this.list[left] < this.list[i]) {
            smallest = left
        }
        if(right < size && this.list[right] < this.list[smallest]) {
            smallest = right
        }
        if(smallest !=i) {
            this.swap(i,smallest)
            this.heapify(smallest)
        }
    }
    insert(num) {
        this.list.push(num)
        this.size++
        let len = parseInt(this.getsize()/2) - 1
        for(let i = len; i>=0; i--) {
            this.heapify(i)
        }
    }
    getmin() {
        if(this.getsize())
            return this.list[0]
        else 
            return null
    }
    extractMin() {
        if(this.getsize()) {
            let len = this.getsize()
            this.swap(0,len-1)
            this.size--
            this.list.pop()
            this.heapify(0)
        } else {
            return null
        }
    }
}
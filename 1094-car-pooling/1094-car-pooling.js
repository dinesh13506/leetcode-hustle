/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    trips.sort(function(t1,t2) { return t1[1] - t2[1]})
    let heap = new MinHeap(capacity)
    //heap.insert(trips[0])
    for(let i = 0; i < trips.length; i++) {
        let trip = trips[i]
        let people = trip[0]
        let start = trip[1]
        let end = trip[2]
        if(heap.capacity >= people) {
            heap.insert(trip)
        } else {
            let top = heap.getTop()
            while(heap.size() && top && top[2] <= start) {
                heap.deleteTop()
                top = heap.getTop()
            }
            if(heap.capacity < people) {
                return false
            } else {
                heap.insert(trip)
            }
        }
    }
    return true
};


class MinHeap {
    constructor(capacity) {
        this.list = []
        this.capacity = capacity
        this.length = 0
    }
    
    size() {
        return this.length
    }
    
    swap(i,j) {
        [this.list[i],this.list[j]] = [this.list[j],this.list[i]]
    }
    
    heapify(i) {
        let smallest = i
        let left = 2 * i + 1
        let right = left + 1
        
        if(left < this.size() && this.list[left][2] < this.list[i][2]) {
            smallest = left
        }
        if(right < this.size() && this.list[right][2] < this.list[smallest][2]) {
            smallest = right
        }
        if(smallest != i) {
            this.swap(i, smallest)
            this.heapify(smallest)
        }
    }
    
    insert(trip) {
        this.list.push(trip)
        this.capacity = this.capacity - trip[0]
        this.length++
        for(let i = parseInt(this.length/2)-1; i >=0 ; i--) {
            this.heapify(i)
        }
    }
    
    getTop() {
        return this.size() ? this.list[0] : null
    }
    
    deleteTop() {
        let people = this.list[0][0]
        this.swap(0, this.size()-1)
        this.list.pop()
        this.length--
        this.capacity = this.capacity + people
        this.heapify(0)
    }
}
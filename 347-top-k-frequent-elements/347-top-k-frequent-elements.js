/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freqMap = new Map()
    for(let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }
    let minheap = new MinHeap(freqMap)
    let uniqueNums = [...freqMap.keys()]
    for(let i = 0 ; i < k; i++) {
        minheap.insert(uniqueNums[i])
    }
   
    for(let i = k ; i < uniqueNums.length; i++) {
        if(freqMap.get(uniqueNums[i]) > freqMap.get(minheap.list[0])) {
            minheap.extractTop()
            minheap.insert(uniqueNums[i])
        }
    }
    return minheap.list
};

class MinHeap {
    constructor(freqMap) {
        this.len = 0
        this.list = []
        this.freqMap = freqMap
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
        let smallest = i
        let left = 2 * i + 1
        let right = left + 1
        
        if(left < this.len && this.freqMap.get(this.list[left]) < this.freqMap.get(this.list[smallest])) {
            smallest = left
        }
        if(right < this.len && this.freqMap.get(this.list[right]) < this.freqMap.get(this.list[smallest])) {
            smallest = right
        }
        
        if(smallest!=i) {
            this.swap(i,smallest)
            this.heapify(smallest)
        }
    }
    insert(num) {
        this.list.push(num)
        this.len++
        for(let i = parseInt(this.len/2) - 1; i>=0; i--) {
            this.heapify(i)
        }
    }
    extractTop() {
        let top = this.list[0]
        this.swap(this.len-1,0)
        this.len--
        this.list.pop()
        this.heapify(0)
    }
}
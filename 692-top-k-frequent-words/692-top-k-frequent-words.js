/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

class MaxHeap {
    constructor() {
        this.list = []
        this.size = 0
    }
    
    getsize() {
        return this.size
    }
    swap(i,j) {
        let temp = this.list[i]
        this.list[i] = this.list[j]
        this.list[j] = temp
    }
    buildUp(i) {
        let parent = parseInt((i-1)/2)
        if(this.list[i].count > this.list[parent].count) {
            this.swap(i,parent)
            this.buildUp(parent)
        }
        else if(this.list[i].count == this.list[parent].count){
            if(this.list[i].value.localeCompare(this.list[parent].value) < 0) {
                this.swap(i,parent)
                this.buildUp(parent)
            }
        }
    }
    
    heapify(i) {
        let largest = i
        let left = 2 * i + 1
        let right = left + 1
        if(left < this.getsize() && this.list[left].count > this.list[largest].count) {
            largest = left
        }
        else if(left < this.getsize() && this.list[left].count == this.list[largest].count) {
            if(this.list[left].value.localeCompare(this.list[largest].value) < 0) {
                largest = left
            } 
        }
        if(right < this.getsize() && this.list[right].count > this.list[largest].count) {
            largest = right
        }
        else if(right < this.getsize() && this.list[right].count == this.list[largest].count) {
            if(this.list[right].value.localeCompare(this.list[largest].value) < 0) {
                largest = right
            } 
        }
        if(largest != i) {
            this.swap(i, largest)
            this.heapify(largest)
        }
    }
    
    insert(obj) {
        this.list.push(obj)
        this.size++
        this.buildUp(this.size - 1)
    }
    
    extractMax() {
        this.swap(0, this.size - 1)
        let obj = this.list.pop()
        this.size--
        this.heapify(0)
        return obj
    }
}
var topKFrequent = function(words, k) {
    
    let freqMap = new Map()
    for(let w of words) {
        let count = freqMap.get(w) || 0
        freqMap.set(w, 1 + count)
    }
    
    let maxheap = new MaxHeap()
    for(let w of freqMap.keys()) {
        maxheap.insert({value : w, count : freqMap.get(w)})
    }
    //console.log(maxheap.list)
    let ans = []
    while(k > 0) {
        ans.push(maxheap.extractMax().value)
        k--
    }
    return ans
};
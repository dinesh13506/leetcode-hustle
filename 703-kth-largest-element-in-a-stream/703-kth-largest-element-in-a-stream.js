/**
 * @param {number} k
 * @param {number[]} nums
 */
let minheap = null
var KthLargest = function(k, nums) {
    minheap = new MinHeap(k)
    for(let num of nums) {
        minheap.insert(num)
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    return minheap.insert(val)
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class MinHeap {
    constructor(k) {
        this.list = []
        this.len = 0
        this.limit = k
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
        let right = 2 * i + 2
        
        if(left < this.len && this.list[left] < this.list[smallest]) {
            smallest = left
        }
        if(right < this.len && this.list[right] < this.list[smallest]) {
            smallest = right
        }
        if(smallest != i) {
            this.swap(i,smallest)
            this.heapify(smallest)
        }
    }
    
    insert(num) {
        if(this.len >= this.limit) {
            if(num > this.list[0]) {
                this.swap(0, this.len-1)
                this.list.pop()
                this.len--
                this.list.push(num)
                this.len++
                for(let i = parseInt(this.len/2) - 1; i>=0; i--) {
                    this.heapify(i)
                }
            }
            
        } else {
            this.list.push(num)
            this.len++
            for(let i = parseInt(this.len/2) - 1; i>=0; i--) {
                this.heapify(i)
            }
        }
        return this.list[0]
    }
}
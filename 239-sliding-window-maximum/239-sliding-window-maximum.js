/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Node {
    constructor(index, value) {
        this.index = index
        this.value = value
    }
}


class MaxHeap {
    constructor() {
        this.size = 0
        this.list = []
    }
    isEmpty() {
        return this.size > 0 ? false : true
    }
    
    swap(i,j) {
        let temp = this.list[i]
        this.list[i] = this.list[j]
        this.list[j] = temp
    }
    
    heapify(i) {
        let largest = i 
        let left = 2 * i + 1
        let right = left + 1
        if(left < this.list.length && this.list[left].value > this.list[largest].value) {
            largest = left
        }
        if(right < this.list.length && this.list[right].value > this.list[largest].value) {
            largest = right
        }
        if(largest != i) {
            this.swap(i, largest)
            this.heapify(largest)
        }
    }
    
    bottomUp(i) {
        let parent = parseInt((i-1)/2)
        while(parent >= 0 && this.list[parent].value < this.list[i].value) {
            this.swap(i,parent)
            this.bottomUp(parent)
        }
    }
    
    insert(index, value) {
        let node = new Node(index, value)
        this.list.push(node)
        this.size++
        this.bottomUp(this.size - 1)
    }
    
    extractMax() {
        this.swap(0, this.size - 1)
        let node = this.list.pop()
        this.size--
        this.heapify(0)
        return node
    }
    
    getMax() {
        return this.list[0]
    }
}
var maxSlidingWindow = function(nums, k) {
    let answer = []
    let maxheap = new MaxHeap()
    for(let i = 0; i < k; i++) {
        maxheap.insert(i, nums[i])
    }
    
    for(let i = k; i < nums.length; i++) {
        while(maxheap.isEmpty() == false && (maxheap.getMax().index < i - k)) {
            maxheap.extractMax()
        }
        let node = maxheap.getMax()
        answer.push(node.value)
        maxheap.insert(i, nums[i])
    }
    //console.log(maxheap.list)
    while(maxheap.isEmpty() == false && maxheap.getMax().index < nums.length - k) {
        maxheap.extractMax()
    }
    let node = maxheap.getMax()
    answer.push(node.value)
    return answer
};
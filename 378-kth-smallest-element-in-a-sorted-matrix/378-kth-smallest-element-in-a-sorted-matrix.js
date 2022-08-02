/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
class MaxHeap {
    constructor() {
        this.list = []
        this.size = 0
    }
    getSize() {
        return this.size
    }
    swap(i,j) {
        let temp = this.list[i]
        this.list[i] = this.list[j]
        this.list[j] = temp
    }
    getParent(i) {
        return parseInt((i-1)/2)
    }
    leftChild(i) {
        return 2 * i + 1
    }
    rightChild(i) {
        return this.leftChild(i) + 1
    }
    insert(num) {
        this.list.push(num)
        this.size++
        let curr = this.size - 1, prt = this.getParent(curr)
        while(prt >= 0 && this.list[prt] < this.list[curr]) {
            this.swap(prt, curr)
            curr = prt
            prt = this.getParent(curr)
        }
    }
    heapify(i) {
        let l = this.leftChild(i), r = this.rightChild(i), largest = i
        if(l < this.size && this.list[l] > this.list[largest]) {
            largest = l
        }
        if(r < this.size && this.list[r] > this.list[largest]) {
            largest = r
        }
        if(largest != i) {
            this.swap(i, largest)
            this.heapify(largest)
        }
    }
    delete() {
        this.swap(0, this.size -1)
        let num = this.list[this.size -1]
        this.list.pop()
        this.size--
        this.heapify(0)
        return num
    }
    getPeek() {
        return this.list[0]
    }
}
var kthSmallest = function(matrix, k) {
    
    let maxheap = new MaxHeap()
    const m = matrix.length, n = matrix[0].length
    for(let r = 0; r < m;  r++) {
        for(let c = 0; c < n; c++) {
            if(maxheap.size < k) {
                maxheap.insert(matrix[r][c])
            } else {
                let peek = maxheap.getPeek()
                if(peek > matrix[r][c]) {
                    maxheap.delete()
                    maxheap.insert(matrix[r][c])
                }
            }
        }
    }
    return maxheap.getPeek()
};
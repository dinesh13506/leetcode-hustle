/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var diagonalSort = function(mat) {
    let m = mat.length
    let n = mat[0].length
    let map = new Map()
    for(let i = 0; i <m ; i++) {
        for(let j = 0; j < n; j++) {
            let diagonalCode = i - j
            let diagonalHeap = map.has(diagonalCode) ? map.get(diagonalCode) : new MinHeap()
            diagonalHeap.insert(mat[i][j])
            map.set(diagonalCode,diagonalHeap)
        }
    }
    for(let i = 0; i <m ; i++) {
        for(let j = 0; j < n; j++) {
            let diagonalCode = i - j
            let diagonalHeap =  map.get(diagonalCode)
            mat[i][j] = diagonalHeap.getTop()
            map.set(diagonalCode,diagonalHeap)
        }
    }
    return mat
};

class MinHeap {
    constructor() {
        this.list = []
        this.heap_size = 0
    }
    size() {
        return this.heap_size
    }
    swap(i,j) {
        let temp = this.list[i]
        this.list[i] = this.list[j]
        this.list[j] = temp
    }  
    heapify(i) {
        let smallest = i
        let left = (2 * i) + 1
        let right = left + 1
        if(left < this.size() && this.list[left] < this.list[smallest]) {
            smallest = left
        }
        if(right < this.size() && this.list[right] < this.list[smallest]) {
            smallest = right
        }
        if(smallest != i) {
            this.swap(i,smallest)
            this.heapify(smallest)
        }
    }
    
    insert(num) {
        this.list.push(num)
        this.heap_size++
        for(let i = parseInt(this.size()/2); i >= 0; i--) {
            this.heapify(i)
        }
    }
    
    getTop() {
        this.swap(0,this.size()-1)
        let value = this.list.pop()
        this.heap_size--
        this.heapify(0)
        return value
    }
}
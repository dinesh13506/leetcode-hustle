/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    let r = mat.length
    let c = mat[0].length
    let arr = new Array(r)
    for(let i = 0; i < r; i++) {
        arr[i] = {
            countOnes : 0,
            rowNo : 0
        }
    }
    for(let i = 0; i < r; i++) {
        arr[i].rowNo = i
        for(let j = 0; j < c; j++) {
            if(mat[i][j] > 0) {
               arr[i].countOnes++
            }
        }
    }
    arr.sort(function(a,b) {
        if(a.countOnes === b.countOnes) {
            return a.rowNo - b.rowNo
        }
        return a.countOnes - b.countOnes
    })
    
    let res = []
    for(let i = 0; i<k;i++) {
        res.push(arr[i].rowNo)
    }
    return res
};



// using maxheap

class maxheap {
    
    constructor() {
        this.list = new Array()
    }
    
    size = () => {
        return this.list.length
    }
    
    swap = (i,j) => {
        let temp = this.list[i]
        this.list[i] = this.list[j]
        this.list[j] = temp
    }
    
    heapify = ( i ) => {
        let len = this.size()
        let largest = i
        let left = (2*i) + 1
        let right = (2*i) + 2
        
        if( left < len && ( (this.list[left].count > this.list[largest].count) || ((this.list[left].count ==  this.list[largest].count) && (this.list[left].row >  this.list[largest].row) ) )) {
            largest = left
        }
        
        if( right < len && ((this.list[right].count > this.list[largest].count) || (( this.list[right].count ==  this.list[largest].count) && (this.list[right].row >  this.list[largest].row) ) )) {
            largest = right
        }
        
        if( largest != i) {
            this.swap(i, largest)
            this.heapify(largest)
        }
    }
    
    add = ( obj ) => {
        let len = this.size()
        
        if(len == 0 ) {
            this.list.push(obj)
        }
        else {
            this.list.push(obj)
            for( let i = parseInt(this.size() / 2) - 1; i>=0; i-- ) {
                this.heapify(i)
            }
        }
    }
}



/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRowsVersion2 = function(mat, k) {
    
    let len = mat.length
    
    let input = []
    
    for( let i=0; i < len; i++ ) {
        let row = mat[i]
        let c = 0
        for( let num of row) {
            if( num == 1) {
                c++
            }
        }
        let obj = {count:c,row:i}
        input.push(obj)
    }
    
    //console.log(input)
    
    let heap = new maxheap()
    for( let i=0; i < k; i++) {
        heap.add(input[i])
    }
    
    for( let i = k; i< input.length; i++) {
        if(input[i].count >= heap.list[0].count && input[i].row > heap.list[0].row ) {
            continue
        }
        else {
            heap.swap(0,heap.size()-1)
            heap.list.pop()
            heap.add(input[i])
        }
    }
    
    //console.log(heap.list)
    heap.list.sort( function(a,b) { return (a.count - b.count) ||( a.row - b.row)})
    
    let op = []
    for( let l of heap.list) {
        op.push(l.row)
    }
    return op
};
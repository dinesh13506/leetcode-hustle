/**
 * @param {number[][]} heights
 * @return {number}
 */

let Node = function(row, col, diff) {
    this.row = row
    this.col = col
    this.diff = diff
}

let MinHeap = function() {
    this.list = []
    this.len = 0
}

MinHeap.prototype.swap = function(i,j) {
    let t = this.list[i]
    this.list[i] = this.list[j]
    this.list[j] = t
}

MinHeap.prototype.heapify = function(i) {
    let smallest = i
    let left = 2 * i + 1
    let right = left + 1
    if(left < this.len && this.list[left].diff < this.list[smallest].diff) {
        smallest = left
    }
    if(right < this.len && this.list[right].diff < this.list[smallest].diff) {
        smallest = right
    }
    if(smallest != i) {
        this.swap(smallest,i)
        this.heapify(smallest)
    }
}
MinHeap.prototype.insert = function(row,col,diff) {
    let node = new Node(row,col,diff)
    this.list.push(node)
    this.len++
    for(let i = parseInt(this.len/2) - 1; i>=0; i--) {
        this.heapify(i)
    }
}
MinHeap.prototype.extractMin = function() {
    this.swap(0, this.len-1)
    let min = this.list[this.len-1]
    this.list.pop()
    this.len--
    this.heapify(0)
    return min
}

MinHeap.prototype.isEmpty = function() {
    return this.len <= 0
}

var minimumEffortPath = function(heights) {
    let m = heights.length, n = heights[0].length
    let diffMatrix = new Array(m)
    for(let i = 0; i < m; i++) {
        diffMatrix[i] = new Array(n)
        diffMatrix[i].fill(Infinity)
    }
    let visited = new Array(m)
    for(let i = 0; i < m; i++) {
        visited[i] = new Array(n)
        visited[i].fill(false)
    }
    
    let directions = [[0,-1],[0,1],[-1,0],[1,0]]
    diffMatrix[0][0] = 0
    let heap = new MinHeap()
    heap.insert(0,0,diffMatrix[0][0])
    //console.log(heap.isEmpty())
    while(!heap.isEmpty()) {
        let cell = heap.extractMin()
        //console.log(cell)
        let row = cell.row, col = cell.col, diff = cell.diff
        if(row == m-1 && col == n-1) {
            return diff
        }
        visited[row][col] = true
        for(let i = 0; i < directions.length; i++) {
            let new_row = row + directions[i][0], new_col = col + directions[i][1]
            if(new_row >=0 && new_row <= m-1 && col>=0 && col<= n-1 && visited[new_row][new_col] === false) {
                let currDiff = Math.abs(heights[row][col] - heights[new_row][new_col])
                let maxDiff = Math.max(currDiff, diffMatrix[row][col])
                if(maxDiff < diffMatrix[new_row][new_col]) {
                    diffMatrix[new_row][new_col] = maxDiff
                    heap.insert(new_row,new_col,diffMatrix[new_row][new_col])
                }                
            }
        }
    }
    //console.log(diffMatrix)
    return diffMatrix[m-1][n-1]
    
};
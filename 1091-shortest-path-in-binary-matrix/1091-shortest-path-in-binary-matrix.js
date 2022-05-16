let Node = function(row, col,distance) {
    this.row = row, this.col = col, this.distance = distance
    this.next = null
}

let MyQueue = function() {
    this.front = null
    this.rear = null
}

MyQueue.prototype.isEmpty = function() {
    if(this.front === null && this.rear === null) {
        return true
    }
    return false
}

MyQueue.prototype.enque = function(row, col, distance) {
    let node = new Node(row, col, distance)
    if(this.isEmpty()) {
        this.front = node
        this.rear = node
    } else {
        this.rear.next = node
        this.rear = this.rear.next
    }
}

MyQueue.prototype.deque = function() {
    if(this.isEmpty()) {
        return
    }
    let node = this.front
    if(this.front === this.rear) {
        this.front = null
        this.rear = null
    } else {
        this.front = this.front.next
    }
    return node
}




/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    
    let m = grid.length, n = grid[0].length // n == m as per question.
    let visited = new Array(m)
    for(let i = 0; i < n; i++) {
        visited[i] = new Array(n)
        visited[i].fill(false)
    }
    
    let startCell = grid[0][0]
    let destCell = grid[m-1][n-1]
    if(startCell === 1 || destCell === 1) {
        return -1
    }
    
    
    let getNeighbours = function(row,col) {
        let directions = [
            [-1,-1],
            [-1,0],
            [-1,1],
            [0,-1],
            [0,1],
            [1,-1],
            [1,0],
            [1,1]
        ]
        let neighbours = []
        for(let dir of directions) {
            let newRow = row + dir[0], newCol = col + dir[1]
            if(newRow < 0 || newRow >= m || newCol < 0 || newCol >=n) {
                continue
            }
            neighbours.push([newRow, newCol])
        }
        return neighbours
    }
    
    let q = new MyQueue()
    q.enque(0,0,1)
    visited[0][0] = true
    
    while(q.isEmpty() === false) {
        let cell = q.deque()
        let curRow = cell.row
        let curCol = cell.col
        let curDistance = cell.distance
        if(curRow === m-1 && curCol == n-1) {
            return curDistance
        }
        
        let neighbours = getNeighbours(curRow, curCol)
        for(let neighbour of neighbours) {
            if(grid[neighbour[0]][neighbour[1]] != 0) {
                continue
            }
            if(visited[neighbour[0]][neighbour[1]] === false) {
                q.enque(neighbour[0],neighbour[1],curDistance + 1)
                visited[neighbour[0]][neighbour[1]] = true
            } 
        }
    }
    return -1
    
};
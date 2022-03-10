class Vertex {
    constructor(value) {
        this.data = value
        this.next = null
    }
}


class MyQueue {
    constructor() {
        this.length = 0
        this.front = null
        this.rear = null
    }

    getfront() {
        return this.front
    }

    enq(value) {
        let vertex = new Vertex(value)
        if(this.length == 0) {
            this.front = vertex
            this.rear = vertex
        } else {
            this.rear.next = vertex
            this.rear = this.rear.next
        }
        this.length++
    }

    deq() {
        if(this.length <=1) {
            this.front = null
            this.rear = null
        } else {
            this.front = this.front.next
        }
        this.length--
    }

    size() {
        return this.length
    }
}


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let m = grid.length
    let n = grid[0].length
    
    let visited = []
    for(let i = 0; i < m; i++) {
        visited[i] = new Array()
        for( let j = 0; j < n; j++) {
            visited[i][j] = false
        }
    }
    
    let count = 0
    for(let i = 0; i < m; i++) {
        for( let j = 0; j < n; j++) {
            if(visited[i][j] == false && grid[i][j] == 1) {
                count++
                bfs([i,j],grid,visited,m,n)
            }
        }
    }
    return count
    
};


let bfs = function(location,grid,visited,m,n) {
    let q = new MyQueue()
    q.enq(location)
    visited[location[0]][location[1]] = true
    
    while(q.size() >0) {
        let loc = q.getfront().data
        q.deq()
        let i = loc[0]
        let j = loc[1]
        if( (i-1)>=0 && grid[i-1][j] == 1 && visited[i-1][j] == false) {
            q.enq([i-1,j])
            visited[i-1][j] = true
        }
        if((i+1) < m && grid[i+1][j] == 1 && visited[i+1][j] == false) {
            q.enq([i+1,j])
            visited[i+1][j] = true
        }
        
        if((j-1) >= 0 && grid[i][j-1] == 1 && visited[i][j-1] == false) {
            q.enq([i,j-1])
            visited[i][j-1] = true
        }
        
        if((j+1) < n && grid[i][j+1] == 1 && visited[i][j+1] == false) {
            q.enq([i,j+1])
            visited[i][j+1] = true
        }
    }
}

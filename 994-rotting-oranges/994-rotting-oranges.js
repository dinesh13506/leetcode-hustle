/**
 * @param {number[][]} grid
 * @return {number}
 */

class Node {
    constructor(r,c) {
        this.r = r
        this.c = c
        this.next = null
    }
}
class Myqueue {
    constructor() {
        this.front = null
        this.rear = null
        this.length = 0
    }
    size() {
        return this.length
    }
    getFront() {
        return this.front
    }
    insert(r,c) {
        let node = new Node(r,c)
        if(this.length == 0) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node
            this.rear = this.rear.next
        }
        this.length++
    }
    
    delete() {
        if(this.front == this.rear) {
            this.front = null
            this.rear = null
        } else {
            this.front = this.front.next
        }
        this.length--
    }
}
var orangesRotting = function(grid) {
    
    let minutes = 0
    const directions = [[-1,0],[0,-1],[1,0],[0,1]]
    let q = new Myqueue()
    let m = grid.length, n = grid[0].length, fresh = 0
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] == 2) {
                q.insert(i,j)
            } else if(grid[i][j] == 1) {
                fresh++
            }
        }
    }
    q.insert(null,null)
    while(q.size() > 0) {
        let front = q.getFront()
        q.delete()
        if(front.r == null && front.c == null) {
            minutes++
            if(q.size() > 0) {
                q.insert(null,null)
            }
        } else {
            let r = front.r, c = front.c
            for(let direction of directions) {
                let x = r + direction[0], y = c + direction[1]
                if( (x >=0 && x < m) && (y >=0 && y < n)){ 
                    if(grid[x][y] == 1) {
                        grid[x][y] = 2
                        q.insert(x,y)
                        fresh--
                    } 
                }
            }
        }
    }
    
    return fresh == 0 ? minutes - 1 : -1
    
};
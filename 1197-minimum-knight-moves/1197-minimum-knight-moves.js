let Node = function(value) {
    this.data = value
    this.next = null
}

let MyQueue = function() {
    this.front = null
    this.rear = null
    this.size = 0
}

MyQueue.prototype.isEmpty = function() {
    if(this.front == null && this.rear == null) {
        return true
    }
    return false
}

MyQueue.prototype.enque = function(value) {
    let node = new Node(value)
    if(this.isEmpty()) {
        this.front = node
        this.rear = node
    } else {
        this.rear.next = node
        this.rear = this.rear.next
    }
    this.size++
}

MyQueue.prototype.getFront = function() {
    if(this.isEmpty()) {
       return 
    }
    return this.front
}

MyQueue.prototype.deque = function() {
    if(this.isEmpty()) {
       return 
    }
    if(this.front == this.rear) {
        this.front = null
        this.rear = null
    } else {
        this.front = this.front.next 
    }
    this.size--
}



/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    
    let getNeighbours = function(a,b) {
        let res = [
            [a-2, b+1],
            [a-2, b-1],
            [a-1, b+2],
            [a-1, b-2],
            [a+1, b+2],
            [a+1, b-2],
            [a+2, b-1],
            [a+2, b+1]
        ]
        return res
    }
    
    let visited = new Map()
    let q = new MyQueue()
    q.enque([0,0,0])    
    let isvisited = function(a,b) {
        if(visited.has(a) && visited.get(a).has(b)) {
            return true
        }
        return false
    }
    
    let markvisited = function(a,b) {
        if(visited.has(a) == false) {
            visited.set(a, new Set())
            visited.get(a).add(b)
        } else {
            visited.get(a).add(b)
        }
    }
    markvisited(0,0)
    while(q.isEmpty() == false) {
        let currLevelSize = q.size
        for(let i = 0; i < currLevelSize; i++) {
            let front = q.getFront().data
            q.deque()
            if(front[0] == x && front[1] == y) {
                return front[2]
            }
            let neighbours = getNeighbours(front[0], front[1])
            //console.log(neighbours)
            for(let neighbour of neighbours) {
                if(isvisited(neighbour[0], neighbour[1]) == false) {
                    markvisited(neighbour[0], neighbour[1])
                    q.enque([neighbour[0], neighbour[1],front[2] + 1])
                }
            }
        }
    }
};
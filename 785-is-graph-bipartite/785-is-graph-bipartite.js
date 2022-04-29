/**
 * @param {number[][]} graph
 * @return {boolean}
 */

let Node = function(u) {
    this.vertex = u
    this.next = null
}

let MyQueue = function() {
    this.front = null
    this.rear = null
}

MyQueue.prototype.enque = function(vertex) {
    let node = new Node(vertex)
    if(this.front == null && this.rear == null) {
        this.front = node
        this.rear = node
    } else {
        this.rear.next = node
        this.rear = this.rear.next
    }
}

MyQueue.prototype.deque = function(vertex) {
    if(this.front == null && this.rear == null) {
        return
    }
    let node = this.front
    if(this.front == this.rear) {
        this.front = null
        this.rear = null
    } else {
        this.front = this.front.next
    }
    return node
}

MyQueue.prototype.isEmpty = function() {
    if(this.front == null && this.rear == null) {
        return true
    }
    return false
}







var isBipartite = function(graph) {
    let V = graph.length
    let color = new Array(V)
    color.fill(-1)
    
    
    let isBipartite = function( s ) {
        let myqueue = new MyQueue()
        color[s] = 1
        myqueue.enque(s)
        while(!myqueue.isEmpty()) {
            let front = myqueue.deque()
            let u = front.vertex
            for(let v of graph[u]) {
                if(color[v] == -1) {
                    color[v] = 1 - color[u]
                    myqueue.enque(v)
                } else if(color[u] == color[v]) {
                    return false
                }
            }
        }
        return true
    }
    
    for(let i = 0; i < V; i++) {
        if(color[i] === -1) {
            if(isBipartite(i) === false) {
                return false
            }
        }
    }
    return true
    
};
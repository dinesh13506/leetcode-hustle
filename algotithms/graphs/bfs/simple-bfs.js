
class Vertex {
    constructor(value) {
        this.data = value
        this.next = null
    }
}


class Queue {
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


let V = 5 //verticies are numbered from 0 to V-1
let adjacencyList = new Array(V)

adjacencyList[0] = [1,2]
adjacencyList[1] = [0,2,3]
adjacencyList[2] = [0,1,3,4]
adjacencyList[3] = [1,2,4]
adjacencyList[4] = [2,3]


let visited = new Array(V)
visited.fill(false)

let start = 0
let q = new Queue()
q.enq(start)
visited[start] = true

let bfsOrder = []
while(q.size() > 0) {
    let front = q.getfront()
    q.deq()
    let v = front.data
    bfsOrder.push(v)
    let neighbours = adjacencyList[v]
    for( let neighbour of neighbours) {
        if(visited[neighbour] == false) {
            visited[neighbour] = true
            q.enq(neighbour)
        }
    }
}

console.log(bfsOrder)



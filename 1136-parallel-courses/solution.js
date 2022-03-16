/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
 var minimumSemesters = function(n, relations) {
    //ingree
    let indegree = new Array(n)
    indegree.fill(0)
    let adjacencyList = new Array(n)
    for(let i = 0; i < n; i++) {
        adjacencyList[i] = new Array()
    }
    
    for(let relation of relations) {
        let u = relation[0] - 1
        let v = relation[1] - 1
        indegree[v]++
        adjacencyList[u].push(v)
    }
    
    let q = new Myqueue()
    for(let i = 0; i < n; i++) {
        if(indegree[i] === 0) {
            q.enq(i)
        }
    }
    
    let count = 0
    let steps = 0
    while(q.size()>0) {
        steps++
        let new_queue = new Myqueue()
        while(q.size()>0) {
            let node = q.getfront()
            q.deq()
            count++
            let neighbours = adjacencyList[node]
            for(let neighbour of neighbours) {
                indegree[neighbour]--
                if(indegree[neighbour] === 0) {
                    new_queue.enq(neighbour)
                }
            }
        }
        q = new_queue
    }
    return count === n ? steps : -1
    
    
};



class Mynode {
    constructor(value) {
        this.data = value
        this.next = null
    }
}
class Myqueue {
    constructor() {
        this.length = 0
        this.front = null
        this.rear = null
    }
    
    size() {
        return this.length
    }
    
    enq(value) {
        let node = new Mynode(value)
        if(this.size()<=0) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node
            this.rear = this.rear.next
        }
        this.length++
    }
    
    deq() {
        if(this.size() <= 1) {
            this.front = null
            this.rear = null
        } else {
            this.front = this.front.next
        }
        this.length--
    }
    
    getfront() {
        return this.front.data
    }
}
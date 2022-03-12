/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    
    let indegree = new Array(numCourses)
    indegree.fill(0)
    let adj = new Map()
    for(let i = 0 ; i < numCourses; i++) {
        adj.set(i,new Array())
    }
    for(let edge of prerequisites) {
        let v1 = edge[0]
        let v2 = edge[1]
        if(adj.get(v1) == undefined) {
           let l = new Array()
           l.push(v2)
           adj.set(v1,l) 
        } else {
           let l = adj.get(v1)
           l.push(v2)
           adj.set(v1,l) 
        }
        indegree[v2]++
    }
    let q = new Myqueue()
    
    for(let i = 0; i < indegree.length; i++) {
        if(indegree[i] == 0) {
            q.enq(i)
        }
    }
    
    let count = 0
    while(q.size() > 0 ) {
        let v = q.getfront()
        q.deq()
        count++
        let neighbours = adj.get(v)
        for( let neighbour of neighbours) {
            indegree[neighbour]--
            if(indegree[neighbour] == 0) {
                q.enq(neighbour)
            }
        }
    }
    return count == numCourses
};


class Mynode {
    constructor(value) {
        this.data = value
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
    
    enq(value) {
        let node = new Mynode(value)
        if(this.size() == 0) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node
            this.rear = this.rear.next
        }
        this.length++
    }
    
    deq() {
        if(this.size() <=1){
            this.front = null
            this.rear = null
            this.length = 0
        } else {
            this.front = this.front.next
            this.length--
        }
    }
    
    getfront() {
        return this.front.data
    }
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    
    let indegree = new Array(numCourses) //numCourses = number of verticies
    indegree.fill(0)
    //calculate indegree of each course, course1 <----- course2
    for(let pre of prerequisites) {
        let course1 = pre[0]
        let course2 = pre[1]
        indegree[course1]++
    }
    //adjacenecy list
    let adjacencyList = new Array(numCourses)
    for( let i = 0; i < numCourses; i++) {
        adjacencyList[i] = new Array()
    }
    // course1 <----- course2
    for(let pre of prerequisites) {
        let course1 = pre[0]
        let course2 = pre[1]
        adjacencyList[course2].push(course1)
    }
    // kahn's BFS based topological sorting
    let queue = new Myqueue()
    //add all courses with no dependecy
    for(let i = 0; i < numCourses; i++) {
        if(indegree[i] == 0) {
            queue.enq(i)
        }
    }
    let ans = []
    while( queue.size() > 0 ) {
        let course = queue.getfront()
        queue.deq()
        ans.push(course)
        let dependentCourses = adjacencyList[course]
        for(let dependentCourse of dependentCourses) {
            indegree[dependentCourse]--
            if(indegree[dependentCourse] == 0) {
               queue.enq(dependentCourse) 
            }
        }
    } 
    return ans.length === numCourses ? ans : []
};


//implement queue for O(1) complexity
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
        if(this.size() <=0) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node
            this.rear = node
        }
        this.length++
    }
    
    getfront() {
        return this.front.data
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
}
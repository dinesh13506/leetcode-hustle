/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

class Node {
    constructor(index) {
        this.index = index
        this.next = null
    }
}

class MyQueue {
    constructor() {
        this.front = null
        this.rear = null
    }
    
    isEmpty() {
        if(this.front == null && this.rear == null) {
            return true
        }
        return false
    }
    
    enque(index) {
        let node = new Node(index)
        if(this.isEmpty()) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node
            this.rear = this.rear.next
        }
    }
    
    deque() {
        if(this.isEmpty()) {
            return
        }
        let node = this.front
        this.front = this.front.next
        if(this.front == null) {
            this.rear = null
        }
        return node
    }
}
var canReach = function(arr, start) {
    let q = new MyQueue()
    let n = arr.length
    let visited = new Array(n)
    visited.fill(false)
    
    q.enque(start)
    visited[start] = true
    while(q.isEmpty() == false) {
        let index = q.deque().index
        if(arr[index] == 0) {
            return true
        }
        let neighbors  = [index + arr[index], index - arr[index]]
        for(let neighbor of neighbors) {
            if(neighbor < 0 || neighbor >= n) {
                continue
            }
            if(visited[neighbor] == false) {
                visited[neighbor] = true
                q.enque(neighbor)
            }
        }
    }
    return false
};
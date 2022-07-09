class Node {
    constructor(index) {
        this.index = index
        this.next = null
        this.prev = null
    }
}

class Deque {
    constructor() {
        this.front = null
        this.rear = null
    }
    
    isEmpty() {
        if(!this.front && !this.rear) {
            return true
        }
        return false
    }
    getFront() {
        if(!this.front || !this.rear) {
            return
        }
        return this.front
    }
    
    getRear() {
        if(!this.front || !this.rear) {
            return
        }
        return this.rear
    }
    
    insertAtRear(index) {
        let node = new Node(index)
        if(this.front == null && this.rear == null) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node
            node.prev = this.rear
            this.rear = this.rear.next
        }
    }
    
    popFromFront() {
        if(!this.front || !this.rear) {
            return
        }
        this.front = this.front.next
        if(this.front) {
            this.front.prev = null
        }
        if(this.front == null) {
            this.rear = null
        }
    }
    popFromRear() {
        if(!this.front || !this.rear) {
            return
        }
        this.rear = this.rear.prev
        if(this.rear) {
            this.rear.next = null
        }
        if(this.rear == null) {
            this.front = null
        }
    }
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
    
    let n = nums.length
    let score = new Array(n) // score[i] max score ending at i and starting at 0
    
    let dq = new Deque()
    score[0] = nums[0]
    dq.insertAtRear(0)
    for(let i = 1; i < n; i++) {
        while(dq.isEmpty() == false && dq.getFront().index < i - k) {
            dq.popFromFront()
        }
        score[i] = nums[i] + score[dq.getFront().index]
        while(dq.isEmpty() == false && score[dq.getRear().index] < score[i]) {
            dq.popFromRear()
        }
        dq.insertAtRear(i)
    }
    return score[n-1]
};
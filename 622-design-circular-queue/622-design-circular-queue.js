class MyNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Myqueue {
    constructor(k) {
        this.capacity = k
        this.front = null
        this.rear = null
        this.size = 0
    }
    
    isEmpty() {
        return this.size <= 0
    }
    isFull() {
        return this.size >= this.capacity
    }
    
    enqueue(val) {
        if(this.isFull()) {
            return false
        }
        let node = new MyNode(val)
        if(this.size == 0) {
            this.front = node
            this.rear = node
            this.rear.next = this.front
        } else {
            this.rear.next = node
            this.rear = this.rear.next
            this.rear.next = this.front
        }
        this.size++
        return true
    }
    
    dequeue() {
        if(this.isEmpty()) {
            return false
        }
        if(this.size == 1) {
            this.front = null
            this.rear = null
        } else {
            this.front = this.front.next
            this.rear.next = this.front
        }
        this.size--
        return true
    }
    getFront() {
        if(this.isEmpty()) return -1
        return this.front.val
    }
    getRear() {
        if(this.isEmpty()) return -1
        return this.rear.val
    }
}


/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.q = new Myqueue(k)
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    return this.q.enqueue(value)
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
     return this.q.dequeue()
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.q.getFront()
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.q.getRear()
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.q.isEmpty()
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.q.isFull()
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
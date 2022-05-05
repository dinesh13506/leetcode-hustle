let Node = function(val) {
    this.val = val
    this.next = null
}

let Myqueue = function() {
    this.front = null
    this.rear = null
    this.size  = 0
}

Myqueue.prototype.isEmpty = function() {
    if(this.front == null && this.rear == null) {
        return true
    }
    return false
}

Myqueue.prototype.insert = function(val) {
    let node = new Node(val)
    if(this.front == null && this.rear == null) {
        this.front = node
        this.rear = node
    } else {
        this.rear.next = node
        this.rear = this.rear.next
    }
}

Myqueue.prototype.delete = function() {
    if(this.front == null && this.rear == null) {
        return
    }
    let node = this.front
    this.front = this.front.next
    if(this.front == null) {
        this.rear = null
    }
    return node
}


Myqueue.prototype.top = function() {
    if(this.front == null && this.rear == null) {
        return
    }
    let top = this.front
    return top
}




var MyStack = function() {
    this.q1 = new Myqueue()
    this.q2 = new Myqueue()
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q2.insert(x)
    while(this.q1.isEmpty() === false) {
        let node = this.q1.delete()
        this.q2.insert(node.val)
    }
    while(this.q2.isEmpty() === false) {
        let node = this.q2.delete()
        this.q1.insert(node.val)
    }
    
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let node = this.q1.delete()
    return node.val
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let node = this.q1.top()
    return node.val
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.isEmpty()
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
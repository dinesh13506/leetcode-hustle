let Node = function(value) {
    this.value = value
}

let Myqueue = function() {
    this.front = null
    this.rear = null
}

Myqueue.prototype.isEmpty = function() {
    if(this.front == null && this.rear == null) {
        return true
    }
    return false
}

Myqueue.prototype.enque = function(value) {
    let node = new Node(value)
    if(this.isEmpty()) {
        this.front = node
        this.rear = node
    } else {
        this.rear.next = node
        this.rear = this.rear.next
    }
}

Myqueue.prototype.deque = function() {
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


Myqueue.prototype.getfront = function() {
    return this.front
}


/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.map = new Map()
    this.q = new Myqueue()
    for(let num of nums) {
        this.map.set(num, 1 + (this.map.get(num) || 0))
        this.q.enque(num)
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    while(this.q.isEmpty() === false) {
        let node = this.q.getfront()
        let num = node.value
        if(this.map.get(num) == 1) {
            return num
        } else {
            this.q.deque()
        }
    }
    return -1
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(num) {
    this.map.set(num, 1 + (this.map.get(num) || 0))
    this.q.enque(num)
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
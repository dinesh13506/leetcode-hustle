let Node = function(index, value) {
    this.index = index
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

Myqueue.prototype.enque = function(index, value) {
    let node = new Node(index, value)
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



/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    
    let queue = new Myqueue()
    let n = tickets.length
    for(let index = 0; index < n; index++) {
        queue.enque(index, tickets[index])
    }
    let time = 0
    while(queue.isEmpty() === false) {
        let node = queue.deque()
        //console.log(node.index, node.value)
        time++
        node.value--
        if(node.value > 0) {
            queue.enque(node.index, node.value)
        } else {
            if(node.index == k) {
                return time
            }
        }
    }
    return time
};
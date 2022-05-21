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



/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    
    let k = 2
    let input = [[0,v1],[0,v2]]
    let n = v1.length + v2.length
    let counter = 0
    let i = 0
    let q = new Myqueue()
    while(i < n) {
        let v = input[counter]
        if(v[0] < v[1].length ) {
            //console.log(v[1][v[0]])
            q.enque(v[1][v[0]++])
            i++
        }
        counter++
        counter = counter % 2
    }
    this.q = q
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    return this.q.isEmpty() ? false : true
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    let node = this.q.deque()
    return node.value
    
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
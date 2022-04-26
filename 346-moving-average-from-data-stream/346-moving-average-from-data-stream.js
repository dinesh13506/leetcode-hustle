let Node = function(val) {
    this.val = val
    this.next = null
}

let LinkedList = function() {
    this.head = null
    this.tail = null
    this.size = 0
}
LinkedList.prototype.delete = function() {
    if(this.head == null) return
    let leftmost = this.head.val
    this.head = this.head.next
    if(this.head == null) {
        this.tail = null
    }
    this.size--
    return leftmost
}
LinkedList.prototype.insert = function(val) {
    let node = new Node(val)
    this.size++
    if(this.head == null && this.tail == null) {
        this.head = node
        this.tail = node
        
        return 
    }
    this.tail.next = node
    this.tail = this.tail.next 
}


/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.ll = new LinkedList()
    this.limit = size
    this.sum = 0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if(this.ll.size < this.limit) {
        this.ll.insert(val)
        this.sum = this.sum + val
    } else {
        let leftmost = this.ll.delete()
        this.sum = this.sum - leftmost
        this.sum = this.sum + val
        this.ll.insert(val)
    }
    return this.sum / this.ll.size
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
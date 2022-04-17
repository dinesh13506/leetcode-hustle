
class Node {
    constructor(value, count) {
        this.value = value
        this.count = count
        this.prev = null
        this.next = null
    }
}

class MyQueue {
    constructor() {
        this.ans = 0
        this.front = null
        this.rear = null
        this.size  = 0
    }
    getFront() {
        return this.front
    }
    popFromBack() {
        let last = this.rear
        if(this.size == 1) {
            this.rear = null
            this.front = null
        } else {
            this.rear = this.rear.prev
        }
        this.size--
        return last
    }
    popFromFront() {
        let first = this.front
        if(this.size == 1) {
            this.rear = null
            this.front = null
        } else {
            this.front = this.front.next
        }
        this.size--
        return first
    }
    insertAtBack(value) {
            if(this.rear && value == this.rear.value) {
                let last = this.rear
                last.count++
            } else {
                let node = new Node(value,1)
                if(this.size == 0) {
                    this.front = node
                    this.rear = node
                } else {
                    node.prev = this.rear
                    this.rear.next = node
                    this.rear = node
                }
                this.size++
            }
            this.ans = this.ans + 1
    }
    
}
var HitCounter = function() {
    this.q = new MyQueue()
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.q.insertAtBack(timestamp)
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    while(this.q.size) {
        let first = this.q.front
        if(first && (timestamp - first.value) >= 300) {
            this.q.popFromFront()
            this.q.ans = this.q.ans - first.count
        } else {
            break
        }
    }
    let p = this.q.front, ans = 0
    while(p) {
        ans = ans + p.count
        p = p.next
    }
    return this.q.ans
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
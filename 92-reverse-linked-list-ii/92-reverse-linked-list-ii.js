/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class Deque {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }
    
    insertAtRear(value) {
        let node = new Node(value)
        if(this.front == null && this.rear == null) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node
            node.prev = this.rear
            this.rear = this.rear.next
        }
        this.size++
    }
    
    popAtRear() {
        if(this.front == null && this.rear == null) {
            return
        }
        
        let node = this.rear
        this.rear = this.rear.prev
        if(this.rear) this.rear.next = null
        
        this.size--
        return node
    }
    
     popAtFront() {
        if(this.front == null && this.rear == null) {
            return
        }
        let node = this.front
        this.front = this.front.next
        if(this.front) this.front.prev = null
        this.size--
        return node
    }
}
var reverseBetween = function(head, left, right) {
    
    let deq = new Deque()
    let p = head, pos = 0
    while(p!= null) {
        pos++
        if(pos>= left && pos <= right) {
            deq.insertAtRear(p)
        }
        p = p.next
    }
    
    //console.log(deq.size)
    while(deq.size > 1) {
        let front = deq.front.data
        let rear = deq.rear.data
        let temp = front.val
        front.val = rear.val
        rear.val = temp
        deq.popAtFront()
        deq.popAtRear()
    }
    return head
    
};
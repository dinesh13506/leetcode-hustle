/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let dummyNode = new ListNode(-1)
    let tail = dummyNode
    let q1 = new Queue(), q2 = new Queue()
    let p = l1
    while(p) {
        q1.enqueue(p)
        p = p.next
    }
    p = l2
    while(p) {
        q2.enqueue(p)
        p = p.next
    }
    
    let carry = 0
    while(q1.isEmpty() == false && q2.isEmpty() == false) {
        let sum = carry + q1.dequeue().val + q2.dequeue().val
        tail.next = new ListNode( sum % 10)
        tail = tail.next
        carry = parseInt(sum / 10)
    }
    while(q1.isEmpty() == false) {
        let sum = carry + q1.dequeue().val
        tail.next = new ListNode( sum % 10)
        tail = tail.next
        carry = parseInt(sum / 10)
    }
    while(q2.isEmpty() == false) {
        let sum = carry + q2.dequeue().val
        tail.next = new ListNode( sum % 10)
        tail = tail.next
        carry = parseInt(sum / 10)
    }
    
    if(carry > 0) {
        tail.next = new ListNode(carry)
        tail = tail.next
    }
    return dummyNode.next
};
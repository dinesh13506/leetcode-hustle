/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortLinkedList = function(head) {
    
    let negativeValues = []
    let positiveValues = []
    let p = head
    while(p) {
        if(p.val >= 0) {
            positiveValues.push(p.val)
        } else {
            negativeValues.push(p.val)
        }
        p = p.next
    }
    
    let newhead = null, newtail = null
    while(negativeValues.length) {
        if(newhead == null) {
            newhead = new ListNode(negativeValues.pop())
            newtail = newhead
        } else {
            newtail.next = new ListNode(negativeValues.pop())
            newtail = newtail.next
        }
    }
    for(let i = 0; i < positiveValues.length; i++) {
        if(newhead == null) {
            newhead = new ListNode(positiveValues[i])
            newtail = newhead
        } else {
            newtail.next = new ListNode(positiveValues[i])
            newtail = newtail.next
        }
    }
    return newhead
    
};
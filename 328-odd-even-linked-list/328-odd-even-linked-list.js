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
var oddEvenList = function(head) {
    if(head == null) {
        return head
    }
    if(head && head.next == null) {
        return head
    }
    if(head && head.next && head.next.next == null) {
        return head
    }
    let oddhead = head
    let oddtail = head
    let evenhead = head.next
    let eventail = evenhead
    while(oddtail && oddtail.next && eventail && eventail.next) {
        oddtail.next = oddtail.next.next
        eventail.next = eventail.next.next
        oddtail = oddtail.next
        eventail = eventail.next 
    }
    oddtail.next = evenhead
    return oddhead
};
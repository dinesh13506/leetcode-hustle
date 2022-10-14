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
var deleteMiddle = function(head) {
    
    let prev = null;
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if(prev == null) {
        return null;
    } else {
        prev.next = slow.next;
        return head;
    }
};
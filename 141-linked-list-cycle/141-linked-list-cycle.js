/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    let slow = head, fast = head
    while(slow && fast) {
        slow = slow.next
        fast = fast.next ? fast.next.next : null
        if(slow && fast && slow == fast) {
            return true
        }
    }
    return false
};
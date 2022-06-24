/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head, fast = head, hasCycle = false
    while(slow && fast) {
        slow = slow.next
        fast = (fast.next) ? fast.next.next : null
        if(slow && fast && slow == fast) {
            hasCycle = true
            break
        }
    }
    if(hasCycle == false) {
        return null
    }
    
    slow = head
    while(slow != fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
};
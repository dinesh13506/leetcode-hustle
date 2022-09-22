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
    
    if(head == null) return null
    if(head.next == null) return null
    
    let slow = head , fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if(fast == slow) {
            break
        }
    }
    //console.log(fast? fast.val : null)
    if(fast) {
        let fast = head
        while(slow && fast && slow != fast) {
            slow = slow.next
            fast = fast.next
        }
        return slow
    } else {
        return null
    }
    //console.log(detectCycle(head))
};
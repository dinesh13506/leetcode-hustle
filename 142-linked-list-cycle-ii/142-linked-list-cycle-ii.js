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
    
    if(head == null || head.next == null) return null
    let slow = head, fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if(slow == fast) {
            break
        }
    }
    //console.log(slow.val)
    if(slow) {
       let p1 = slow
       let p2 = head
       while(p1 && p2 && p1 != p2) {
           p1 = p1.next
           p2 = p2.next
       }
       return p1
    } else {
        return null
    }
};
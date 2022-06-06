/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let memory = new Map()
    let p1 = headA, p2 = headB
    while(p1) {
        memory.set(p1, true)
        p1 = p1.next
    }
    
    while(p2) {
        if(memory.has(p2)) {
            return p2
        }
        p2 = p2.next
    }
    return null
};
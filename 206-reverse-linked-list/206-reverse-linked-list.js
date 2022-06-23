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
var reverseList = function(head) {
    
    let stack = []
    let p = head
    while(p) {
        stack.push(p.val)
        p = p.next
    }
    
    p = head
    while(stack.length) {
        p.val = stack.pop()
        p = p.next
    }
    return head
};
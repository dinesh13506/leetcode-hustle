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
        if(stack.length) {
            let prev = stack[stack.length-1]
            prev.next = null
        }
        stack.push(p)
        p = p.next
    }
    
    let newhead = null, newtail = null
    while(stack.length) {
        if(newhead == null && newtail == null) {
            newhead = stack.pop()
            newtail = newhead
        } else {
            newtail.next = stack.pop()
            newtail = newtail.next
        }
    }
    return newhead
};
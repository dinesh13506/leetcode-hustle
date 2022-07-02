/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function(head, m, n) {
    
    let stack = []
    let p = head, skip = false
    while(p) {
        if(skip == true) {
            let count = n
            while( p && count > 0 ) {
                p = p.next
                count--
            }
            skip = false
        } else {
            let count = m
            while(p && count > 0) {
                stack.push(p.val)
                p = p.next
                count--
            }
            skip = true
        }
    }
    let newhead = null, newtail = null
    for(let i = 0; i < stack.length; i++) {
        if(newhead && newtail) {
            newtail.next = new ListNode(stack[i])
            newtail = newtail.next
        } else {
            newhead = new ListNode(stack[i])
            newtail = newhead
        }
    }
    return newhead
};
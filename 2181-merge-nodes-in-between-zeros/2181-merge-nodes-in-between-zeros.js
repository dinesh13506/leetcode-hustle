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
var mergeNodes = function(head) {
    
    let stack = []
    let p = head
    let newhead = null, newtail = null
    while(p) {
        if(p.val == 0 && stack.length) {
            let sum = 0
            while(stack.length) {
                sum = sum + stack[stack.length-1]
                stack.pop()
            }
            if(newhead == null) {
                newhead = new ListNode(sum)
                newtail = newhead
            } else {
                newtail.next = new ListNode(sum)
                newtail= newtail.next
            }
        } else {
            stack.push(p.val)
        }
        p = p.next
    }
    return newhead
};
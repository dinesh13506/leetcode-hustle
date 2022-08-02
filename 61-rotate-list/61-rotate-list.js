/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(k == 0 || head == null) {
        return head
    }
    let len = 0
    let p = head
    let stack = []
    while(p) {
        len++
        stack.push(p)
        p = p.next
    }
    k = k % len
    if(k > 0) {
        
        let start = null, end = null
        while(k > 0 ) {
            start = stack.pop()
            if(end == null) {
                end = start
            }
            k--
        }
        //console.log(start, end)
        let newtail = stack[stack.length-1] || null
        if(newtail) {
            newtail.next = null
        }
        if(end) {
            end.next = head
            head = start
        }
    }
    return head
};
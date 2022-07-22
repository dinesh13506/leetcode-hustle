/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    
    let st = []
    let gte = []
    let pointer = head
    while(pointer) {
        let value = pointer.val
        if( value < x) {
            st.push(value)
        } else {
            gte.push(value)
        }
        pointer = pointer.next
    }
    
    let newhead = new ListNode(-1)
    let newtail = newhead
    for(let value of st) {
        newtail.next = new ListNode(value)
        newtail = newtail.next
    }
    
    for(let value of gte) {
        newtail.next = new ListNode(value)
        newtail = newtail.next
    }
    
    return newhead.next
};
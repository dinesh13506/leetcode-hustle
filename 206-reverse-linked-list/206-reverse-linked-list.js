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
    
    let reverse = (p) => {
        if(p == null) {
            return p
        }
        if(p.next == null) {
            return p
        }
        let newhead = reverse(p.next)
        p.next.next = p
        p.next = null
        return newhead
    }
    return reverse(head)
};
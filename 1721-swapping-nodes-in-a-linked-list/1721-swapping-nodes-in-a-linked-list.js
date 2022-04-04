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
var swapNodes = function(head, k) {
    
    let node1 = null, node2 = null, length = 0, p = head
    while(p) {
        length++
        p = p.next
    }
    let i = 0
    p = head
    while(p) {
        if(i== k-1) {
            node1 = p
        } 
        if( i== length - k) {
            node2 = p
        }
        i++
        p = p.next
    }
    
    [node1.val,node2.val] = [node2.val,node1.val]
    return head
    
};
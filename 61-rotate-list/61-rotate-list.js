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
    while(p) {
        len++
        p = p.next
    }
    k = k % len
    while(k > 0) {
        let prev = null
        let p = head
        while(p.next != null) {
            prev = p
            p = p.next
        }
        if(prev) {
            prev.next = null
            p.next = head
            head = p
        }
        k--
    }
    return head
};
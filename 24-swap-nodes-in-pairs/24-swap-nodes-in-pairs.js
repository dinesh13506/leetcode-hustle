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
var swapPairs = function(head) {
    if(head == null) {
        return head
    }
    let p = head, count = 1, prev = null
    while(p) {
        prev = p
        p = p.next
        count++
        if(count % 2 == 0 && p != null) {
            let temp = p.val
            p.val = prev.val
            prev.val = temp
        }
    }
    return head
};
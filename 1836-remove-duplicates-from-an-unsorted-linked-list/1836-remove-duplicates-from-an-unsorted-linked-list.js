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
var deleteDuplicatesUnsorted = function(head) {
    
    let map = new Map()
    let p = head
    while(p) {
        map.set(p.val,  1 + (map.get(p.val) || 0))
        p = p.next
    }
    
    let newhead = null, tail = null
    p = head
    while(p) {
        if(map.get(p.val) == 1) {
            if(newhead == null) {
                newhead = new ListNode(p.val)
                tail = newhead
            } else {
                tail.next = new ListNode(p.val)
                tail = tail.next
            }
        }
        p = p.next
    }
    return newhead
};
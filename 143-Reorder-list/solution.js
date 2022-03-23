/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    
    let getMid = function(p) {
        let slow = p
        let fast = p
        while(fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
    
    let mid = getMid(head)
    let p2 = mid.next
    mid.next = null
    let p1 = head
    
    let connect = function(p) {
        if( p == null) {
            return p
        }
        if(p.next == null) {
            return p
        }
        let node = connect(p.next)
        let temp = p1.next
        node.next = p1.next
        p1.next = node
        p1 = temp
        p.next = null
        return p
    }
    let node = connect(p2)
    if(node) {
        node.next = p1.next
        p1.next = node
    }
    
};
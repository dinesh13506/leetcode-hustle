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
    
    if( k == 0 ) return head
    
    let p = head
    let length = 0
    let lastNode = null
    while( p != null ) {
        length++
        lastNode = p
        p = p.next
    }
    
    if(  k % length == 0  || length == 0 ) return head
    
    
    k = k % length
    
    p = head
    let node = null
    let c = 0
    while( p != null) {
        if( c == length - k - 1 ) {
            node = p
            break
        }
        c++
        p = p.next
    }
    
    let mainNode = node.next
    lastNode.next = head
    node.next = null
    head = mainNode
    return head
    
};
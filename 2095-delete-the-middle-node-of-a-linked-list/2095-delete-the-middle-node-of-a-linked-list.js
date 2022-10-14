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
var deleteMiddle = function(head) {
    
    let p = head;
    let n = 0;
    while(p) {
        n++;
        p = p.next;
    }
    let x = parseInt(n/2);
    let c = 0;
    p = head;
    let prev = null;
    while(p) {
        if(x == c) {
           if(prev == null) {
               return null;
           } else {
               prev.next = p.next;
               return head;
           }
        }
        c++;
        prev = p;
        p = p.next;
    }
};
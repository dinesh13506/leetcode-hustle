/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let prev = node, next = node.next;
    let tailprev = null;
    while(next) {
        let temp = prev.val;
        prev.val = next.val;
        next.val = temp;
        tailprev = prev;
        prev= next;
        next = next.next;
    }
    tailprev.next = null;
    
    
};
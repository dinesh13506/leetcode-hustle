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
    let prev = null
    while(node && node.next != null) {
        let temp = node.val
        node.val = node.next.val
        node.next.val = temp
        prev = node
        node = node.next
    }
    prev.next = null
};
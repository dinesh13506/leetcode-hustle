/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    
    let deleteNode = (node, prev, next) => {
        if(prev) {
            prev.next = next
        } else {
            head = next
        }
    }
    
    let stack = []
    let prev = null, next = null
    let p = head
    while(p) {
        stack.push(p)
        p = p.next
    }
    
    let length = stack.length
    let index = length - n
    let node = stack[index]
    if(index - 1 >= 0) {
        prev = stack[index-1]
    }
    if(index + 1 < length) {
        next = stack[index+1]
    }
    deleteNode(node,prev,next)
    return head
};
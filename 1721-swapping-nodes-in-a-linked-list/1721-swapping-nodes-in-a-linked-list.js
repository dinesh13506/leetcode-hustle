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
    let stack = new Array()
    let p = head
    while(p) {
        stack.push(p)
        p = p.next
    }
    
    p = head
    let c = 0
    while(p) {
        let top = stack.pop()
        c++
        if(c == k) {
            [p.val,top.val] = [top.val,p.val]
            break
        }
        p = p.next
    }
    return head
};
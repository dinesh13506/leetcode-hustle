/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    let p = head, stack = []
    while(p) {
        stack.push(p)
        p = p.next
    }
    p = head
    while(p) {
        let top = stack.pop()
        if(p.val != top.val) {
            return false
        }
        p = p.next
    }
    return true
};
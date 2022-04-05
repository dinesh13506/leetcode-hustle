/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let stack = []
    let p = head
    while(p) {
        stack.push(p.val)
        p = p.next
    }
    let ans = 0
    let x = 0
    while(stack.length) {
        ans = ans + (stack.pop()) * Math.pow(2,x)
        x++
    }
    return ans
};
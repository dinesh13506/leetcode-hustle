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
    
    let num = 0
    let x = 0
    let rev = function(p) {
        if(p == null) {
            return null
        }
        rev(p.next)
        num = num + (p.val) * Math.pow(2,x)
        x++
    }
    rev(head)
    return num
    
};
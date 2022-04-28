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
var sortList = function(head) {
    
    let arr = []
    let p = head
    while(p) {
        arr.push(p.val)
        p = p.next
    }
    arr.sort(function(a,b) {
        if(a<b) {
            return -1
        } else if(a>b) {
            return 1
        } else {
            return 0
        }
    })
    p = head
    let i = 0
    while(p) {
        p.val = arr[i++]
        p = p.next
    }
    return head
};
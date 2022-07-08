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
var oddEvenList = function(head) {
    let odds = []
    let evens = []
    let index = 1
    let p = head
    while(p) {
        if(index % 2 == 0) {
            evens.push(p.val)
        }else {
            odds.push(p.val)
        }
        p = p.next
        index++
    }
    let newhead = null, newtail = null, i = 0
    while( i < odds.length) {
        if(newhead == null) {
            newhead = new ListNode(odds[i])
            newtail = newhead
        } else {
            newtail.next = new ListNode(odds[i])
            newtail = newtail.next
        }
        i++
    }
    i = 0
    while( i < evens.length ) {
        if(newhead == null) {
            newhead = new ListNode(evens[i])
            newtail = newhead
        } else {
            newtail.next = new ListNode(evens[i])
            newtail = newtail.next
        }
        i++
    }
    
    return newhead
};
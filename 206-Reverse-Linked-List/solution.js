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
 var reverseListIterrative = function(head) {
    
    let prev = null
    let curr = head
    while(curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
};

var reverseList = function(head) {
    let newHead = null
    let reverse = function(curr) {
         if(curr == null) { return curr }
         if(curr.next == null)  {
             newHead = curr
             return
         }
         reverse(curr.next)
         curr.next.next = curr
         curr.next = null
    }
    reverse(head)
    return newHead
}
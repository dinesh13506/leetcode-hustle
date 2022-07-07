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
    
    let findMid = (node) => {
        let slow = node
        let fast = node
        while(fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
    
    let reverse = (node) => {
        let p = node
        let prev = null
        while(p) {
            let temp = p.next
            p.next = prev
            prev = p
            p = temp
        }
        return prev
    }
    
    let mid = findMid(head)
    let p2 = reverse(mid.next)
    
    let p1 = head
    while(p2) {
        if(p1.val != p2.val) {
            return false
        }
        p1 = p1.next
        p2 = p2.next
    }
    mid.next = reverse(p2)
    return true
};
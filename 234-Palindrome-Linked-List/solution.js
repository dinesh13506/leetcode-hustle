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
    
    let getFirstHalf = function() {
        let slow = head
        let fast = head
        while(fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
    
    let reverseLinkList = function(start) {
        let prev = null
        let curr = start
        while(curr) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        return prev
    }
    
    let firstHalfEnd = getFirstHalf(head)
    let secondHalfHead = reverseLinkList(firstHalfEnd.next)
    //p1 will have extra node in case of odd length
    let p1 = head
    let p2 = secondHalfHead
    let ans = true
    while(p2){
        if(p1.val != p2.val) {
            ans = false
            break
        }
        p1 = p1.next
        p2 = p2.next
    }
    firstHalfEnd.next = reverseLinkList(secondHalfHead) //revert back changes
    return ans
};
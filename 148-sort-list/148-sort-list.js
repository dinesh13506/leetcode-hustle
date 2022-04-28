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
    
    let getMid = function(node) {
        if(node == null) return
        let slow = node, fast = node, prevmid = node
        while(fast && fast.next) {
            prevmid = slow
            slow = slow.next
            fast = fast.next.next
        }
        let mid = prevmid.next
        prevmid.next = null
        return mid
    }
    
    let merge = function(l1,l2) {
        let dummyhead = new ListNode()
        let dummytail = dummyhead
        while(l1 && l2) {
            if(l1.val < l2.val) {
                dummytail.next = l1
                dummytail = dummytail.next
                l1 = l1.next
            } else {
                dummytail.next = l2
                dummytail = dummytail.next
                l2 = l2.next
            }
        }
        if(l1) {
            dummytail.next = l1
        }
        if(l2) {
            dummytail.next = l2
        }
        return dummyhead.next
    }
    
    let sort = function(head) {
        if(head == null || head.next == null) {
            return head
        }
        let mid = getMid(head)
        let l1 = sort(head)
        let l2 = sort(mid)
        return merge(l1,l2)
    }
    return sort(head)
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    let list = []
    let p1 = list1, p2 = list2
    while(p1 && p2) {
        if(p1.val == p2.val) {
            list.push(p1.val)
            list.push(p2.val)
            p1 = p1.next
            p2 = p2.next
        } else if(p1.val < p2.val) {
            list.push(p1.val)
            p1 = p1.next
        } else {
            list.push(p2.val)
            p2 = p2.next
        }
    }
    
    while(p1) {
        list.push(p1.val)
        p1 = p1.next
    }
    while(p2) {
        list.push(p2.val)
        p2 = p2.next
    }
    //console.log(list)
    let head = null, tail = null
    for(let i = 0; i < list.length; i++) {
        if(head == null && tail == null) {
            head = new ListNode(list[i])
            tail = head
        } else {
            tail.next = new ListNode(list[i])
            tail = tail.next
        }
    }
    return head
};
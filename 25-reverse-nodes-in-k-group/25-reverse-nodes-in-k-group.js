/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    
    let length = 0
    let p = head
    while(p) {
        length++
        p = p.next
    }
    //console.log("length = " , length)
    let groups = parseInt(length / k)
    //console.log("groups = ", groups)
    
    let curr = head, newhead = null
    let lists = []
    for(let g = 1; g <= groups; g++) {
        let stack = [], count = k
        let start = curr
        while(count > 0) {
            stack.push(curr)
            curr = curr.next
            count--
        }
        let dummyNode = new ListNode(-1)
        let tail = dummyNode
        while(stack.length) {
            tail.next = new ListNode(stack.pop().val)
            tail = tail.next
        }
        lists.push([dummyNode.next, tail])
    }
    let prev = lists[0]
    for(let i = 1; i < lists.length; i++) {
        prev[1].next = lists[i][0]
        prev = lists[i]
    }
    let remaining = null
    let count = 1
    p = head
    while(count <= length) {
        if(count > groups * k) {
            remaining = p
            break
        }
        p = p.next
        count++
    }
    //console.log(remaining)
    lists[lists.length-1][1].next = remaining
    return lists[0][0]
};
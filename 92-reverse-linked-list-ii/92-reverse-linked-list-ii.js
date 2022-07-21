/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    
    let nodes = []
    let index = 1
    let p = head
    while(p) {
        if(index >= left && index <= right) {
            nodes.push(p)
        }
        index++
        p = p.next
    }
    //console.log(nodes)
    let i = 0, j = nodes.length - 1
    while(i<=j) {
        let temp = nodes[i].val
        nodes[i].val = nodes[j].val
        nodes[j].val = temp
        i++
        j--
    }
    return head
};
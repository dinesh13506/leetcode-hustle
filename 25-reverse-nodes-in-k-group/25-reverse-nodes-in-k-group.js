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
    
    let getLength = (node) => {
        let p = node
        let length = 0
        while(p) {
            length++
            p = p.next
        }
        return length
    }
    let length = getLength(head)
    if(length == 0) {
        return head
    }
    
    let groups = parseInt( length / k )
    let groupInfo = new Array(groups)
    let curr = head, remainingPart = null
    for(let i = 0; i < groups; i++) {
        groupInfo[i] = new Array(2)
        groupInfo[i][0] = curr
        let count = k
        while(count > 0) {
            count--
            groupInfo[i][1] = curr
            curr = curr.next
        }
        //console.log(groupInfo[i][0].val + " -> "  + groupInfo[i][1].val)
        remainingPart = groupInfo[i][1].next
        groupInfo[i][1].next = null
    }
    
    let reverse = (group) => {
        let curr = group[0], prev = null, end = curr
        while(curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        
        group[0] = prev
        group[1] = end
        //console.log(prev, curr)
    }
    reverse(groupInfo[0])
    let prev = groupInfo[0]
    for(let i = 1; i < groups; i++) {
        reverse(groupInfo[i])
        prev[1].next = groupInfo[i][0]
        prev = groupInfo[i]
    }
    prev[1].next = remainingPart
    return groupInfo[0][0]
};
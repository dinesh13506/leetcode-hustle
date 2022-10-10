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
var reverseList = function(head) {
    
    let newhead = null
    let dfs = (p) => {
        if(p) {
            let next = dfs(p.next)
            //console.log(next ? next.val : null)
            if(next == null) {
                newhead = p
            } else {
                p.next = null
                next.next = p
            }
            return p
        }
    }
    
    dfs(head)
    return newhead
};
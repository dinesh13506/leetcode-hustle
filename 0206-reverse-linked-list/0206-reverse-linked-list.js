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
            let prev = dfs(p.next)
            //console.log(next ? next.val : null)
            if(prev == null) {
                newhead = p
            } else {
                p.next = null
                prev.next = p
            }
            return p
        }
    }
    
    dfs(head)
    return newhead
};
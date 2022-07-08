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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    
    let len = new Array(k)
    len.fill(0)
    let p = head, index = 0
    while(p) {
        //console.log(len, index%k)
        len[index%k]++
        index++
        p = p.next
    }
    //console.log(len)
    let answer = new Array(k)
    for(let i = 0 ; i < k; i++) {
        answer[i] = new ListNode()
    }
    p = head
    for(let i = 0; i < len.length; i++) {
        if(len[i] != 0 ) {
            let count = len[i]
            let tail = answer[i]
            while(count > 0 && p) {
                tail.next = p
                tail = tail.next
                p = p.next
                count--
            }
            tail.next = null
            //console.log(tail.val, p ? p.val : null)
        }
    }
    for(let i = 0 ; i < k; i++) {
        answer[i] = answer[i].next
    }
    return answer
};
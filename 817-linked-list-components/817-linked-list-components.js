/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
  
    let set = new Set()
    for(let num of nums) {
        set.add(num)
    }
    let p = head, res = 0
    while(p) {
        if(set.has(p.val) && (p.next == null || !set.has(p.next.val) )) {
            res++
        }
        p = p.next
    }
    return res
};
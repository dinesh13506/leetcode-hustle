/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    
    let points = []
    let p = head
    let prev = null
    let d = 0
    while(p) {
        let next = p.next
        if(prev && next) {
            if(p.val > prev.val && p.val > next.val) {
                points.push(d)
            }
            if(p.val < prev.val && p.val < next.val) {
                points.push(d)
            }
        }
        d++
        prev = p
        p = p.next
    }
    
    if(points.length < 2) {
        return [-1,-1]
    }
    
    let max = points[points.length-1] - points[0]
    let min = Infinity
    for(let i = 0; i < points.length; i++) {
        if(i>0) {
            min = Math.min(points[i] - points[i-1], min)
        }
    }
    return [min, max]
    
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.head = head
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let p = this.head
    let scope = 1
    let value = 0
    while(p) {
        let rand = Math.random()
        let prob = 1.0 / scope
        if(rand < prob) {
            value = p.val
        }
        p = p.next
        scope++
    }
    return value
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
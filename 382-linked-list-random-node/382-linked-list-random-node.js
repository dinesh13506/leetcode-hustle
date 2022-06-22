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
    let p = head
    let arr = []
    while(p) {
        arr.push(p.val)
        p = p.next
    }
    this.arr = arr
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    
    let rand = Math.random()
    let i = Math.floor(rand * this.arr.length)
    return this.arr[i]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
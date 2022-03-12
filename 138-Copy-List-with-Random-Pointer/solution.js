/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    
    let map = new Map()
    let p = head
    while(p) {
        let copyNode = new Node(p.val,null,null)
        map.set(p, copyNode)
        p = p.next
    }
    
    //console.log(map)
    
    p = head
    let newHead = null
    while(p) {
        let copyNode = map.get(p)
        if(newHead == null) {
            newHead = copyNode
        }
        copyNode.next = p.next ? map.get(p.next) : null
        copyNode.random = p.random ? map.get(p.random) : null
        p = p.next
    }
    return newHead
};
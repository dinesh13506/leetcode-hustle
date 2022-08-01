/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class MinHeap {
    constructor() {
        this.list = []
        this.size = 0
    }
    
    length() {
        return this.size
    }
    
    swap(i,j) {
        let temp = this.list[i]
        this.list[i] = this.list[j]
        this.list[j] = temp
    }
    
    left(i) {
        return 2 * i + 1
    }
    right(i) {
        return this.left(i) + 1
    }
    
    parent(i) {
        return parseInt((i-1)/2)
    }
    
    insert(obj) {
        this.list.push(obj)
        this.size++
        let prt = this.parent(this.size - 1)
        let curri = this.size - 1
        while( prt>= 0 && this.list[prt] && this.list[prt].val > this.list[curri].val) {
            this.swap(curri, prt)
            curri = prt
            prt = this.parent(curri)
        }
    }
    
    heapify(i) {
        let l = this.left(i)
        let r = this.right(i)
        let smallest = i
        if(l < this.size && this.list[l].val < this.list[smallest].val) {
            smallest = l
        }
        if(r < this.size && this.list[r].val < this.list[smallest].val) {
            smallest = r
        }
        
        if(i != smallest) {
            this.swap(i, smallest)
            this.heapify(smallest)
        }
    }
    
    delete() {
        this.swap(0, this.size -1)
        let obj = this.list.pop()
        this.size--
        this.heapify(0)
        return obj
    }
}
var mergeKLists = function(lists) {
    
    let dummyNode = new ListNode(-1)
    let tail = dummyNode
    let heap = new MinHeap()
    for(let i = 0; i < lists.length; i++) {
        let head = lists[i]
        if(head) {
            heap.insert(head)
        }
    }
    
    while(heap.length() > 0) {
        let node = heap.delete()
        tail.next = new ListNode(node.val)
        tail = tail.next
        if(node.next) {
            heap.insert(node.next)
        }
    }
    return dummyNode.next
};
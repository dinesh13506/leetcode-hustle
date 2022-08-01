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
        while( prt>= 0 && this.list[prt] && this.list[prt].value > this.list[curri].value) {
            this.swap(curri, prt)
            curri = prt
            prt = this.parent(curri)
        }
    }
    
    heapify(i) {
        let l = this.left(i)
        let r = this.right(i)
        let smallest = i
        if(l < this.size && this.list[l].value < this.list[smallest].value) {
            smallest = l
        }
        if(r < this.size && this.list[r].value < this.list[smallest].value) {
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
            let firstValue = head.val
            let obj = {
                index : head,
                value: firstValue
            }
            heap.insert(obj)
        }
    }
    
    while(heap.length() > 0) {
        //console.log(heap.list)
        let minObj = heap.delete()
        //console.log(minObj)
        tail.next = new ListNode(minObj.value)
        tail = tail.next
        if(minObj.index.next) {
            let obj = {
                index : minObj.index.next,
                value: minObj.index.next.val
            }
            heap.insert(obj)
            //console.log("pushed ", obj.value, obj.index)
        }
    }
    return dummyNode.next
};
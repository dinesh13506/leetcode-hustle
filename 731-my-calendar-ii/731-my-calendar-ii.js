class ListNode {
    constructor(val) {
        this.val = val
        this.prev = null
        this.next = null
    }
}

class SortedLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    
    insert(val) {
        let node =  new ListNode(val)
        //console.log(val)
        if(this.head == null) {
            this.head = node
            this.tail = node
        } else {
            let p = this.head
            let prev = null
            while(p) {
                if(p.val >= val) {
                    break
                }
                prev = p
                p = p.next
            }
            if(prev == null) {
                this.head.prev = node
                node.next = this.head
                this.head = node
            } else {
                node.next = prev.next
                node.prev = prev
                if(node.next) {
                    node.next.prev = node
                }
                prev.next = node
            }
            
        }
        return node
    }
    
    delete(node) {
        if(node == this.head) {
            this.head = this.head.next
        } else {
            if(node.next) {
                node.next.prev = node.prev
            }
            if(node.prev) {
                node.prev.next = node.next
            }
        }
    }
    
    getKeys() {
        let p = this.head
        let list = new Set()
        while(p) {
            if(list.has(p.val) == false) {
                list.add(p.val)
            }
            
            p = p.next
        }
        //console.log("list => ", list)
        return [...list]
    }
}
var MyCalendarTwo = function() {
    this.map = new Map()
    this.sortedLL = new SortedLinkedList()
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    let startNode = this.sortedLL.insert(start)
    let endNode = this.sortedLL.insert(end)
    this.map.set(start, (this.map.get(start) || 0) + 1)
    this.map.set(end, (this.map.get(end) || 0) - 1)
    
    let keys = this.sortedLL.getKeys()
    let count = 0
    for(let time of keys) {
        count += this.map.get(time)
        if(count >= 3 ) {
            this.map.set(start, (this.map.get(start) || 0) - 1)
            this.map.set(end, (this.map.get(end) || 0) + 1)
            this.sortedLL.delete(startNode)
            this.sortedLL.delete(endNode)
            //this.sortedLL.print()
            return false
        }
    }
    return true
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
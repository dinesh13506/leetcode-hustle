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
    
    getkeys() {
        let p = this.head
        let set = new Set()
        while(p) {
            if(set.has(p.val) == false) {
                set.add(p.val)
            }
            
            p = p.next
        }
        return Array.from(set)
    }
}


var MyCalendarThree = function() {
    this.map = new Map()
    this.sortedLL = new SortedLinkedList()
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    
    let startNode = this.sortedLL.insert(start)
    let endNode = this.sortedLL.insert(end)
    this.map.set(start, (this.map.get(start) || 0) + 1)
    this.map.set(end, (this.map.get(end) || 0) - 1)
    let ans = 0, cur = 0
    let keys = this.sortedLL.getkeys()
    for(let time of keys) {
        cur += this.map.get(time)
        ans = Math.max(ans, cur)
    }
    return ans
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
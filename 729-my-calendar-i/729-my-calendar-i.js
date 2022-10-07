class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SortedLinkedList {
    constructor() {
        this.head = null
    }
    
    insert(val) {
        let node =  new ListNode(val)
        if(this.head == null) {
            this.head = node
            return [null, node]
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
                node.next = this.head
                this.head = node
                return [null, node]
            } else {
                node.next = prev.next 
                prev.next = node
                return [prev, node]
            }
        }
    }
    
    delete(val) {
        let prev = null
        let p = this.head
        while(p) {
            if(p.val == val) {
                break
            }
            prev = p
            p = p.next
        }
        
        if(prev == null) {
            this.head = this.head.next
        } else {
            prev.next = p.next
        }
    }
    
    print() {
        let p = this.head
        let list = []
        while(p) {
            list.push(p.val)
            p = p.next
        }
        console.log("list => ", list)
    }
}

var MyCalendar = function() {
    this.map = new Map()
    this.sortedLL = new SortedLinkedList()
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let [prev_start, node_start] = this.sortedLL.insert(start)
    let [prev_end, node_end] = this.sortedLL.insert(end)
    this.map.set(start, (this.map.get(start) || 0) + 1)
    this.map.set(end, (this.map.get(end) || 0) - 1)
    
    let p = this.sortedLL.head
    let keys = []
    while(p) {
        keys.push(p.val)
        p = p.next
    }
    //console.log(keys)
    let count = 0
    for(let time of keys) {
        count += this.map.get(time)
        if(count >= 2) {
            this.map.set(start, (this.map.get(start) || 0) - 1)
            this.map.set(end, (this.map.get(end) || 0) + 1)
            this.sortedLL.delete(start)
            this.sortedLL.delete(end)
            //this.sortedLL.print()
            return false
        }
    }
    return true
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
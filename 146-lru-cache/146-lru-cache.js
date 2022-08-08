class ListNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DLL {
    constructor(capacity) {
        this.size = 0
        this.capacity = capacity
        this.head = new ListNode()
        this.tail = new ListNode()
        this.tail.prev = this.head
        this.head.next = this.tail
        this.map = new Map()
    }
    
    addNode(node) {
        node.prev = this.head
        node.next = this.head.next
        this.head.next.prev = node
        this.head.next = node
    }
    
    removeNode(node) {
        node.next.prev = node.prev
        node.prev.next = node.next
    }
    
    movetohead(node) {
        this.removeNode(node)
        this.addNode(node)
    }
    
    get(key) {
        let node = this.map.get(key)
        if(!node) {
            return -1
        }
        this.movetohead(node)
        return node.value
    }
    
    set(key, value) {
        let node = this.map.get(key)
        if(node) {
            node.value = value
            this.map.set(key, node)
            this.movetohead(node)
        } else {
            let node = new ListNode(key, value)
            this.addNode(node)
            this.size++
            this.map.set(key, node)
            if(this.size > this.capacity) {
                let prev = this.tail.prev
                this.removeNode(prev)
                this.map.delete(prev.key)
                this.size--
            }
        }
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.dll = new DLL(capacity)
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    return this.dll.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.dll.set(key,value)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
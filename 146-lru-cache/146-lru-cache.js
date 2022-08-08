class ListNode {
    constructor(key,value) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DLL {
    constructor(capacity) {
        this.size = 0
        this.capacity = capacity
        this.head = new ListNode(-1,-1)
        this.tail = new ListNode(-1,-1)
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
    
    get(key) {
        if(this.size == 0 || this.map.has(key) == false) {
            return -1
        }
        let node = this.map.get(key)
        this.removeNode(node)
        this.addNode(node)
        return node.value
    }
    
    put(key, value) {
        if(this.map.has(key)) {
            let node = this.map.get(key)
            node.value = value
            this.map.set(key, node)
            this.removeNode(node)
            this.addNode(node)
        }
        else {
            let node = new ListNode(key, value)
            this.map.set(key, node)
            this.addNode(node)
            this.size++
            if(this.size > this.capacity) {
                let node = this.tail.prev
                this.map.delete(node.key)
                this.removeNode(node)
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
     this.dll.put(key, value)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
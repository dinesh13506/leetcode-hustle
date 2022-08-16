class DLLNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
        this.freq = 1
    }
}

class DLL {
    constructor() {
        this.size = 0
        this.head = new DLLNode(0,0)
        this.tail = new DLLNode(0,0)
        this.head.next = this.tail
        this.tail.prev = this.head
    }
    /* insert at the front of DLL */
    insert(currNode) {
        let nextNode = this.head.next
        let prevNode = this.head
        currNode.next = nextNode
        currNode.prev = prevNode
        nextNode.prev = currNode
        prevNode.next = currNode
        this.size++
    }
    
    delete(currNode) {
        let nextNode = currNode.next
        let prevNode = currNode.prev
        prevNode.next = nextNode
        nextNode.prev = prevNode
        this.size--
    }
}
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity
    this.size = 0
    this.cache = new Map() /* key -> node */
    this.freqmap = new Map() /* freq -> doubly linked list */
    this.minfreq = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    let currNode = this.cache.get(key)
    /* if currNode is not prersent */
    if(currNode == null || currNode == undefined) {
        return -1
    } else {
        //update the frequency of node , remove from old freq and all to new
        this.updateNode(currNode)
        return currNode.value
    }
};
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if(this.capacity == 0) {
        return
    }
    if(this.cache.has(key)) {
        let currNode = this.cache.get(key)
        currNode.value = value
        this.updateNode(currNode)
    } else {
        this.size++
        if(this.size > this.capacity) {
            //console.log(this.minfreq, this.freqmap.get(this.minfreq))
            let minfreqdll = this.freqmap.get(this.minfreq)
            let lastnode = minfreqdll.tail.prev
            minfreqdll.delete(lastnode)
            this.cache.delete(lastnode.key)
            this.size--
        }
        this.minfreq = 1
        let newNode = new DLLNode(key, value)
        this.cache.set(key, newNode)
        let dll = this.freqmap.get(1) || new DLL()
        dll.insert(newNode)
        this.freqmap.set(1, dll)
    }
};

LFUCache.prototype.updateNode = function(currNode) {
    let currDll = this.freqmap.get(currNode.freq)
    currDll.delete(currNode)
    
    /** if currfreq is minimum and dll become empty */
    if(currNode.freq == this.minfreq && currDll.size == 0) {
        this.minfreq++
    }
    currNode.freq++
    let newDll = this.freqmap.get(currNode.freq) || new DLL()
    newDll.insert(currNode)
    this.freqmap.set(currNode.freq, newDll)
    this.cache.set(currNode.key, currNode)
}
/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
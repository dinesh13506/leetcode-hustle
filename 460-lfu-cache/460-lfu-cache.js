class DLLNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.frequency = 1
        this.prev = null
        this.next = null
    }
}

class DLL {
    constructor() {
        this.listSize = 0
        this.head = new DLLNode(0,0)
        this.tail = new DLLNode(0,0)
        this.head.next = this.tail
        this.tail.prev = this.head
    }
    
    addNode(currNode) {
        let nextNode = this.head.next
        let prevNode = this.head
        currNode.next = nextNode
        currNode.prev = prevNode
        prevNode.next = currNode
        nextNode.prev = currNode
        this.listSize++
    }
    
    deleteNode(currNode) {
        let nextNode = currNode.next
        let prevNode = currNode.prev
        prevNode.next = nextNode
        nextNode.prev = prevNode
        this.listSize--
    }
}



/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity
    this.curSize = 0
    this.minfrequency = 0
    this.nodemap = new Map() // key -> node
    this.freqmap = new Map() // freq -> DLL
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    let currNode = this.nodemap.get(key)
    if(currNode == undefined || currNode == null) {
        return -1
    }
    this.updateNode(currNode)
    return currNode.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    //console.log(this.minfrequency,this.curSize, this.capacity )
    if(this.capacity == 0) {
        return
    }
    let currNode = this.nodemap.get(key)
    if(currNode) {
        currNode.value = value
        this.updateNode(currNode)
    } else {
        this.curSize++
        if(this.curSize > this.capacity) {
            let minFreqDll = this.freqmap.get(this.minfrequency)
            let lastNode = minFreqDll.tail.prev
            minFreqDll.deleteNode(lastNode)
            this.nodemap.delete(lastNode.key)
            this.curSize--
        }
        this.minfrequency = 1
        let newNode = new DLLNode(key,value)
        let dllList = this.freqmap.get(1) || new DLL()
        dllList.addNode(newNode)
        this.freqmap.set(1, dllList)
        this.nodemap.set(key, newNode)
    }
};

LFUCache.prototype.updateNode = function(currNode) {
    let dll = this.freqmap.get(currNode.frequency)
    dll.deleteNode(currNode)
    if(this.minfrequency == currNode.frequency && dll.listSize == 0) {
        this.minfrequency++
    }
    currNode.frequency++
    let newdll = this.freqmap.get(currNode.frequency) || new DLL()
    newdll.addNode(currNode)
    this.freqmap.set(currNode.frequency, newdll)
    this.nodemap.set(currNode.key, currNode)
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
let Node = function(key,value) {
    this.key = key
    this.value = value
    this.next = null
}

let LinkedList = function() {
    let dummy = new Node(-1,-1)
    this.head = dummy
    this.tail = dummy
}


LinkedList.prototype.insert = function(key,value) {
    let node = new Node(key,value)
    this.tail.next = node
    this.tail = node
}

LinkedList.prototype.get = function(key) {
    let curr = this.head
    while(curr) {
        if(curr.key === key) {
            return curr.value
        }
        curr = curr.next
    }
    return -1
}

LinkedList.prototype.remove = function(key) {
    let curr = this.head, prev = null, found = false
    while(curr) {
        if(curr.key === key) {
            found = true
            break
        }
        prev = curr
        curr = curr.next
    }
    if(found) {
        if(this.tail == curr) {
            this.tail = prev
        }
        prev.next = curr.next
    }
    
}

LinkedList.prototype.put = function(key,value) {
    let curr = this.head
    while(curr) {
        if(curr.key === key) {
            curr.value = value
            return
        }
        curr = curr.next
    }
    this.insert(key,value)
}

var MyHashMap = function() {
    this.key_space = 2069
    this.buckets = new Array(this.key_space)
    for(let i = 0; i < this.key_space; i++) {
        this.buckets[i] = new LinkedList()
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let hash_key = key % this.key_space
    let bucket = this.buckets[hash_key]
    return bucket.put(key,value)
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let hash_key = key % this.key_space
    let bucket = this.buckets[hash_key]
    return bucket.get(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let hash_key = key % this.key_space
    let bucket = this.buckets[hash_key]
    return bucket.remove(key)
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
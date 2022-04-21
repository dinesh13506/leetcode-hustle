let Node = function(val) {
    this.val = val
    this.left = null
    this.right = null
}

let BST = function() {
   this.root = null
}

BST.prototype.search = function(root, val) {
    if(root == null) {
        return root
    }
    if(val < root.val) {
        return this.search(root.left,val)
    } else if(val === root.val) {
        return root
    } else {
        return this.search(root.right,val)
    }
}

BST.prototype.insert = function(root,val) {
    if(root == null) {
        return new Node(val)
    }
    if(val < root.val) {
        root.left = this.insert(root.left,val)
    } else if(val === root.val) {
        return root
    } else if( val > root.val) {
        root.right = this.insert(root.right,val)
    }
    return root
}

BST.prototype.predecessor = function(root) {
    root = root.left
    while(root.right) {
        root = root.right
    }
    return root
}

BST.prototype.successor = function(root) {
    root = root.right
    while(root.left) {
        root = root.left
    }
    return root
}

BST.prototype.delete = function(root,val) {
    if(root == null) {
        return null
    }
    if(val < root.val) {
        root.left = this.delete(root.left,val)
    } else if( val > root.val) {
        root.right = this.delete(root.right,val)
    } else {
        if(root.left == null && root.right == null) {
            root = null
        } else if(root.right != null) {
            let successor = this.successor(root)
            root.val = successor.val
            root.right = this.delete(root.right, successor.val)
        }
        else {
            let predecessor = this.predecessor(root)
            root.val = predecessor.val
            root.left = this.delete(root.left, predecessor.val)
        } 
    }
    return root
}



var MyHashSet = function() {
    this.keySize = 997
    this.buckets = new Array(997)
    for(let i = 0; i < this.keySize; i++) {
        this.buckets[i] = new BST()
    }
};

MyHashSet.prototype.hash = function(key) {
    return key % this.keySize
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let index = this.hash(key)
    let bst = this.buckets[index]
    let root = bst.root
    bst.root = bst.insert(root,key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let index = this.hash(key)
    let bst = this.buckets[index]
    let root = bst.root
    bst.root = bst.delete(root,key)
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let index = this.hash(key)
    let bst = this.buckets[index]
    let root = bst.root
    return bst.search(root,key) ? true : false
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
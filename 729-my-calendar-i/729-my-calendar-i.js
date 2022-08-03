class TreeNode {
    constructor(start, end) {
        this.start = start
        this.end = end
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(root, node) {
        if(node.end <= root.start) {
            if(root.left == null) {
                root.left = node
                return true
            } else {
                return this.insert(root.left, node)
            }
        }
        else if(node.start >= root.end) {
            if(root.right == null) {
                root.right = node
                return true
            } else {
                return this.insert(root.right, node)
            }
        } else {
            return false
        }
    }
}


var MyCalendar = function() {
    this.bst = new BST()
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    const node = new TreeNode(start, end)
    if(this.bst.root == null) {
        this.bst.root = node
        return true
    }
    return this.bst.insert(this.bst.root, node)
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
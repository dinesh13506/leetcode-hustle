/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var verticalTraversal = function(root) {
    
    let result = []
    if(root == null) {
        return result
    }
    
    let mastermap = {}
    let min_col_index = Number.MAX_SAFE_INTEGER
    let max_col_index = Number.MIN_SAFE_INTEGER
    let q = new queue()
    q.enq(root,0)
    let level = 0
    while(q.size()>0) {
        let n = q.size()
        let map = {}
        for( let i = 0; i<n;i++){
            let front = q.getfront()
            q.deq()
            let tnode = front.data
            let col_index = front.col_index
            if(map[col_index]) {
                map[col_index].push(tnode.val)
            }
            else {
                map[col_index] = []
                map[col_index].push(tnode.val)
            }
            min_col_index = Math.min(col_index, min_col_index)
            max_col_index = Math.max(col_index, max_col_index)
            if(tnode.left) {
                q.enq(tnode.left,col_index-1)
            }
            if(tnode.right) {
                q.enq(tnode.right,col_index+1)
            }
        }
        mastermap[level] = map
        level++
    }
    
    //console.log(min_col_index,max_col_index)
    //console.log(mastermap,level)
    let final_map = {}
    for( let i = 0; i < level; i++) {
        let map = mastermap[i]
        for( let j = min_col_index; j <= max_col_index; j++) {
            if(map[j]) {
                if(final_map[j]) {
                     map[j].sort(function(a,b) { return a - b })
                     final_map[j].push(...map[j])
                }
                else {
                    final_map[j] = []
                    map[j].sort(function(a,b) { return a - b })
                    final_map[j].push(...map[j])
                }
               
            }
        }
    }
    
    //console.log(final_map)
    for( let j = min_col_index; j <= max_col_index; j++) {
        result.push(final_map[j])
    }
    return result
};


class node {
    constructor(tree_node,col_index) {
        this.data = tree_node
        this.col_index = col_index
        this.next = null
    }
}


class queue {
    constructor() {
        this.front = null
        this.rear = null
        this.length = 0
    }
    
    size = () => {
        return this.length
    }
    
    enq = (tree_node,col_index) => {
        let new_node = new node(tree_node,col_index)
        if(this.size() <= 0){
            this.front = new_node
            this.rear = new_node
        }
        else {
            this.rear.next = new_node
            this.rear = new_node
        }
        this.length++
    }
    
    deq = () => {
        if(this.size()<=1) {
            this.front = null
            this.rear = null
        }
        else {
            this.front = this.front.next
        }
        this.length--
    }
    
    getfront = () => {
        return this.front
    }
}
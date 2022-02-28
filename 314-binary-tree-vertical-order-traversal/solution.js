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
 let min_col_index = Number.MAX_SAFE_INTEGER
 let max_col_index = Number.MIN_SAFE_INTEGER
 var verticalOrder = function(root) {
     min_col_index = Number.MAX_SAFE_INTEGER
     max_col_index = Number.MIN_SAFE_INTEGER
     let result = []
     if(root == null) {
         return result
     }
     
     let map = {}
     let q = new queue()
     q.enq(root,0)
     while(q.size() > 0 ) {
         let n = q.size()
         for( let i=0; i < n; i++) {
             let front = q.getfront()
             q.deq()
             let tnode = front.data
             let col = front.col
             min_col_index = Math.min(col,min_col_index)
             max_col_index = Math.max(col,max_col_index)
             if(map[col]) {
                 map[col].push(tnode.val)
             }
             else {
                 map[col] = []
                 map[col].push(tnode.val)
             }
             if(tnode.left) {
                 q.enq(tnode.left,col-1)
             }
             if(tnode.right) {
                 q.enq(tnode.right,col+1)
             }
         }
         
     }
     //console.log(map)
     
     
     for( let k = min_col_index; k<=max_col_index; k++) {
         result.push(map[k])
     }
     return result
 };
 
 
 class node {
     constructor(tree_node,col) {
         this.data = tree_node
         this.next = null
         this.col = col
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
     
     enq = (tree_node,col) => {
         let new_node = new node(tree_node,col) 
         if(this.size() <= 0) {
             this.front = new_node
             this.rear = new_node
         } else {
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
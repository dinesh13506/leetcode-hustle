/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
 let ptr = null
 var sortedListToBST = function(head) {
     if(head == null) {
         return null
     }
     ptr = head
     let length = getsize(head)
     return buildbst(0,length-1)
 };
 
 
 let buildbst = function(start,end) {
     if(start > end) {
         return null
     }
     
     let mid = parseInt((start+end)/2)
     let left = buildbst(start,mid-1)
     
     let root = new TreeNode(ptr.val)
     ptr = ptr.next
     root.left = left
     
     root.right = buildbst(mid+1,end)
     return root
 }
 
 
 let getsize = function(head) {
     let c = 0
     let p = head
     while(p) {
         c++
         p = p.next
     }
     return c
 }
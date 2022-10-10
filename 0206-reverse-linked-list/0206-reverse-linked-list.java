/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    
    public ListNode newhead = null;
    public ListNode dfs(ListNode p) {
        if(p != null) {
            ListNode prev = dfs(p.next);
            // System.out.println(prev != null ? prev.val : null);
            // System.out.println(p != null ? p.val : null);
            if(prev == null) {
                newhead = p;
            } else {
                p.next = null;
                prev.next = p;
            }
            return p;    
        } else {
            return null;
        }
    }
    
    public ListNode reverseList(ListNode head) {
        dfs(head);
        return newhead;
    }
}
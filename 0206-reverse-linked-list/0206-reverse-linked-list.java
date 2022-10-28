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
    public ListNode newhead;
    public ListNode reverse(ListNode node) {
        if(node.next == null) {
            newhead = node;
            return node;
        }
        ListNode prev = reverse(node.next);
        prev.next = node;
        node.next = null;
        return node;
    }
    public ListNode reverseList(ListNode head) {
        if(head == null || head.next == null) {
            return head;
        }
        reverse(head);
        return newhead;
        
    }
}
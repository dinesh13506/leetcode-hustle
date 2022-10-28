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
    public ListNode reverseList(ListNode head) {
        if(head == null || head.next == null) {
            return head;
        }
        LinkedList<ListNode> stack = new LinkedList<ListNode>();
        ListNode p = head;
        while(p != null) {
            stack.add(p);
            p = p.next;
        }
        ListNode newhead = new ListNode(0), newtail = newhead;
        while(stack.size() > 0) {
            ListNode node = stack.pollLast();
            newtail.next = node;
            node.next = null;
            newtail = newtail.next;
        }
        return newhead.next;
        
    }
}
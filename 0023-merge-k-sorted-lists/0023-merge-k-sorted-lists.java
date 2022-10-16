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
    public ListNode mergeKLists(ListNode[] lists) {
        
        ListNode head = null;
        ListNode tail = null;
        PriorityQueue<ListNode> pq = new PriorityQueue<ListNode>((a,b) -> {
            return a.val - b.val;
        });
        final int k = lists.length;
        if(k == 0) {
            return head;
        }
        for(int i = 0; i < k; i++) {
            if(lists[i] == null) continue;
            pq.add(lists[i]);
        }
        while(pq.isEmpty() == false) {
            ListNode top = pq.poll();
            if(head == null) {
                head = new ListNode(top.val);
                tail = head;
            } else {
                tail.next = new ListNode(top.val);
                tail = tail.next;
            }
            if(top.next != null) {
                pq.add(top.next);
            }
        }
        return head;
    }
}
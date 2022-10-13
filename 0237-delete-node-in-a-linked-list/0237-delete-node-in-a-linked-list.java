/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public void deleteNode(ListNode node) {
        ListNode nodeToBeDeleted = node;
        ListNode nextNode = nodeToBeDeleted.next; //it exists as node is not tail
        nodeToBeDeleted.val = nextNode.val;
        nodeToBeDeleted.next = nextNode.next;
        nextNode.next = null;
    }
}
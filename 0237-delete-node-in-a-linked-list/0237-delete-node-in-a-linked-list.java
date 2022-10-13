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
        ListNode currNode = node;
        ListNode nextNode = node.next;
        ListNode tailPrev = null;
        while(nextNode != null) {
            currNode.val += nextNode.val;
            nextNode.val = currNode.val - nextNode.val;
            currNode.val -= nextNode.val;
            tailPrev = currNode;
            currNode = nextNode;
            nextNode = nextNode.next;
        }
        tailPrev.next = null;
    }
}
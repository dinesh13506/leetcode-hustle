### 426. Convert Binary Search Tree to Sorted Doubly Linked List

[426. Convert Binary Search Tree to Sorted Doubly Linked List
](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/)

Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.

You can think of the left and right pointers as synonymous to the predecessor and successor pointers in a doubly-linked list. For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.

We want to do the transformation in place. After the transformation, the left pointer of the tree node should point to its predecessor, and the right pointer should point to its successor. You should return the pointer to the smallest element of the linked list.


Constraints:

1. The number of nodes in the tree is in the range [0, 2000].
2. -1000 <= Node.val <= 1000
3. All the values of the tree are unique.
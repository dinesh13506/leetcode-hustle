Given the root of a binary search tree, a target value, and an integer k, return the k values in the BST that are closest to the target. You may return the answer in any order.

You are guaranteed to have only one unique set of k values in the BST that are closest to the target.


```
Input: root = [4,2,5,1,3], target = 3.714286, k = 2
Output: [4,3]
```

```
Input: root = [1], target = 0.000000, k = 1
Output: [1]
```

Constraints:

1. The number of nodes in the tree is n.
2. 1 <= k <= n <= 104.
3. 0 <= Node.val <= 109
4. -109 <= target <= 109
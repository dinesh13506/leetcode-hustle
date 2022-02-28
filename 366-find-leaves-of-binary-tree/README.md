### 366. Find Leaves of Binary Tree
[366. Find Leaves of Binary Tree
](https://leetcode.com/problems/find-leaves-of-binary-tree/)

Given the root of a binary tree, collect a tree's nodes as if you were doing this:

Collect all the leaf nodes.
Remove all the leaf nodes.
Repeat until the tree is empty.

```
Input: root = [1,2,3,4,5]
Output: [[4,5,3],[2],[1]]
Explanation:
[[3,5,4],[2],[1]] and [[3,4,5],[2],[1]] are also considered correct answers since per each level it does not matter the order on which elements are returned.
```

```
Input: root = [1]
Output: [[1]]
```

Constraints:

1. The number of nodes in the tree is in the range [1, 100].
2. -100 <= Node.val <= 100
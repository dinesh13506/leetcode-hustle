### 993. Cousins in Binary Tree

[993. Cousins in Binary Tree
](https://leetcode.com/problems/cousins-in-binary-tree/)

Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.

Two nodes of a binary tree are cousins if they have the same depth with different parents.

Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.

```
Input: root = [1,2,3,4], x = 4, y = 3
Output: false
```

```
Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
```
```
Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false
```

Constraints:

1. The number of nodes in the tree is in the range [2, 100].
2. 1 <= Node.val <= 100
3. Each node has a unique value.
4. x != y
5. x and y are exist in the tree.
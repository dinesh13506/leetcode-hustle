### 510. Inorder Successor in BST II

[510. Inorder Successor in BST II
](https://leetcode.com/problems/inorder-successor-in-bst-ii/)

Given a node in a binary search tree, return the in-order successor of that node in the BST. If that node has no in-order successor, return null.

The successor of a node is the node with the smallest key greater than node.val.

You will have direct access to the node but not to the root of the tree. Each node will have a reference to its parent node. Below is the definition for Node:



```
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
}
```

```
Input: tree = [2,1,3], node = 1
Output: 2
Explanation: 1's in-order successor node is 2. Note that both the node and the return value is of Node type.
```

```
Input: tree = [5,3,6,2,4,null,null,1], node = 6
Output: null
Explanation: There is no in-order successor of the current node, so the answer is null.
```

Constraints:

1. The number of nodes in the tree is in the range [1, 104].
2. -105 <= Node.val <= 105
3. All Nodes will have unique values.
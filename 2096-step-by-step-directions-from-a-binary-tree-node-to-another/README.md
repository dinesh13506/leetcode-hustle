### 2096. Step-By-Step Directions From a Binary Tree Node to Another

[2096. Step-By-Step Directions From a Binary Tree Node to Another
](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)

You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n. You are also given an integer startValue representing the value of the start node s, and a different integer destValue representing the value of the destination node t.

Find the shortest path starting from node s and ending at node t. Generate step-by-step directions of such path as a string consisting of only the uppercase letters 'L', 'R', and 'U'. Each letter indicates a specific direction:

1. 'L' means to go from a node to its left child node.
2. 'R' means to go from a node to its right child node.
3. 'U' means to go from a node to its parent node.
Return the step-by-step directions of the shortest path from node s to node t.

```
Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
Output: "UURL"
Explanation: The shortest path is: 3 → 1 → 5 → 2 → 6.
```

```
Input: root = [2,1], startValue = 2, destValue = 1
Output: "L"
Explanation: The shortest path is: 2 → 1.
```

Constraints:

1. The number of nodes in the tree is n.
2. 2 <= n <= 105
3. 1 <= Node.val <= n
4. All the values in the tree are unique.
5. 1 <= startValue, destValue <= n
6. startValue != destValue


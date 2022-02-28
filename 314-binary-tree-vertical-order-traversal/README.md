Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

```
[3,9,20,null,null,15,7]
[3,9,8,4,0,1,7]
[3,9,8,4,0,1,7,null,null,null,2,5]
[0,1,4,2,8,37,13,3,34,14,29,66,45,22,19,5,6,39,69,null,17,null,35,null,null,null,null,32,null,null,58,null,9,10,7,null,55,89,null,42,51,57,null,86,null,null,null,11,18,53,15,12,null,null,null,null,null,48,null,80,84,75,65,null,null,26,64,27,21,9]
[1,2,3,4,5,6,null,null,7,8,null,null,9,null,10,null,11,10]
```

```
[[9],[3,15],[20],[7]]
[[4],[9],[3,0,1],[8],[7]]
[[4],[9,5],[3,0,1],[8,2],[7]]
[[26,9],[5,11,53],[3,9,10,64,27],[2,6,39,18,15,12,48],[1,34,14,66,7,55,89,42,86,21],[0,8,37,69,17,32,80,75],[4,29,45,22,51,57],[13,35,84,65],[19],[58]]
[[4],[2,7,8],[1,5,6,10,11,10],[3,9]]
```

Constraints:

1. The number of nodes in the tree is in the range [0, 100].
2. -100 <= Node.val <= 100
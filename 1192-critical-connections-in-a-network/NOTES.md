1. Edges involved in a cycle will not be critical connections. So after removing all cycle edges , remaining edges will be critical ones.
2. DFS can be used to find a cycle and we can back track all the edges in a cycle with the help of rank. In undirected graph if we are trying to explore a vertex which is already explored then there is a cycle. the vertex u should not explore its parent. as it is a undirected graph. u-----v 
3. Time complexity: O(v+e)
4. Space Complexity: O(e) + O(v)
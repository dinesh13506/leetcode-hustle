1. In undirected graph of n nodes , we need atleast n-1 edges to make it connected.
2. if total connections given are less than n - 1 then return -1
3. calculate numbers of disconnected components using dfs. let x is the number then we need x-1 wires to connect it.
4. Complexity O(connections + n)

### quick find
Let N is number of verticies in the graph.

Time Complexity:

Union(v1,v2) => O(N)
Find(v) => O(1)
isconnected(v1,v2) => O(1)



Auxiliary Space => O(N) for root array


### Quick union
Union(v1,v2) => O(N)
Find(v) => O(N)
isconnected(v1,v2) => O(N)


### Union By rank

Union(v1,v2) => O(logN)
Find(v) => O(logN)
isconnected(v1,v2) => O(logN)


### Path Compression with Union By rank

Union(v1,v2) => O(alpha(N)) where alpha(N) <=4 
Find(v) => O(alpha(N))
isconnected(v1,v2) => O(alpha(N))

this one is faster due to anormatized time complexity.


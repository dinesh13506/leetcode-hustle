1. ingree = n-1 outdegree = 0 gives celebrity. TC: O(n^2)
2. A knows B, it means A cannot be a celebrity else A might be.
3. step 2 takes O(n-1) calls to knows()
4. final call to check if candiadte is a celebrity will call knows O(n-1) times , TC: O(n) 
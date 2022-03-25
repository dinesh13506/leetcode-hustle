1. When we robe house no 0 then we cannot robe house no n-1
so one cost is  [0...n-2]
2. when we do not robe 0 then we can robe n-1
so other cost is [1...n-1]

max(cost1,cost2) is the answer.

Time Complexity; O(n + n ) for two passes
Space Complexity; O()
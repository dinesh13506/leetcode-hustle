### 922. Sort Array By Parity II

[922. Sort Array By Parity II](https://leetcode.com/problems/sort-array-by-parity-ii/)

Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.

```
Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
```

```
Input: nums = [2,3]
Output: [2,3]
```

Constraints:

1. 2 <= nums.length <= 2 * 104
2. nums.length is even.
3. Half of the integers in nums are even.
4. 0 <= nums[i] <= 1000
### 81. Search in Rotated Sorted Array II
[81. Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)

There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

You must decrease the overall operation steps as much as possible.


```
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
```

```
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
```

Constraints:

1. 1 <= nums.length <= 5000
2. -104 <= nums[i] <= 104
3. nums is guaranteed to be rotated at some pivot.
4. -104 <= target <= 104
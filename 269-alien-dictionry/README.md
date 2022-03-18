### 269. Alien Dictionary
[269. Alien Dictionary](https://leetcode.com/problems/alien-dictionary/)

There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.

Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

A string s is lexicographically smaller than a string t if at the first letter where they differ, the letter in s comes before the letter in t in the alien language. If the first min(s.length, t.length) letters are the same, then s is smaller if and only if s.length < t.length.

```
Input: words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"
```

```
Input: words = ["z","x"]
Output: "zx"
```

```
Input: words = ["z","x","z"]
Output: ""
Explanation: The order is invalid, so return "".
```

Constraints:

1. 1 <= words.length <= 100
2. 1 <= words[i].length <= 100
3. words[i] consists of only lowercase English letters.
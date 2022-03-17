### 856. Score of Parentheses
[856. Score of Parentheses](https://leetcode.com/problems/score-of-parentheses/)

Given a balanced parentheses string s, return the score of the string.

The score of a balanced parentheses string is based on the following rule:

1. "()" has score 1.
2. AB has score A + B, where A and B are balanced parentheses strings.
3. (A) has score 2 * A, where A is a balanced parentheses string.


```
Input: s = "()"
Output: 1
```

```
Input: s = "(())"
Output: 2
```

```
Input: s = "()()"
Output: 2
```
Constraints:

1. 2 <= s.length <= 50
2. s consists of only '(' and ')'.
3. s is a balanced parentheses string.
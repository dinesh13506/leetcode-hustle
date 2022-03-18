1. if  s[i] is greater than s[i+1] and there is a occurance of s[i] in later part of string then we can safely remove s[i]. Repeat this deletion and then consider s[i+1].
2. Use stack to maintain smallest lexicographical order.
3. mark s[i] as seen if added to stack and s[i] as unseen when removed from stack.
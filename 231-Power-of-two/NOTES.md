1. -n is the 2's compliment of n
2. -n = ~n + 1
3. (n & (-n)) always set's all bits to 0 except rightmostbit. in 2 ^n there is only one bit in binary representation so if result of (n&(-n)) is equals n then n is power of 2.

4. n & (n-1) set's the rightmost bit of n to zero. Since power of 2 has only one bit set. so n & (n-1) will always be zero.
1. x & (x-1) sets the 1 bit at position closest to right end to 0.

```
for example:
x = 4 (100)
x-1 = 3 (110)

x & (x-1) = (100)
```

```
x = 12 (1100)
x-1 = 11 (1011)
x & (x-1) = 1000
```

2. diffrence between number of 1's in x and (x&(x-1)) is by one.

so
ans[x] = ans[x&(x-1)] + 1




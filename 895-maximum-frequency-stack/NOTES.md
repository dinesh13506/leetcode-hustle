1. maxFrequency is always increasing by 1 and decreasing by 1.
2. When a new frequency value is introduced,a new group is getting created and the new element is pushed to that group. maxFrequency is getting updated.
3. when pop operation is done, if there is no element left in maxfrequency group then maxfrequency will decrease by 1.

Time Complexity:

push(element)
O(1) -> fetch frequency
O(1) -> update frequency
O(1) -> fetch group
O(1) -> update group

overall O(1)

pop:
O(1) -> fetch group by maxfreq
O(1) -> update group
O(1) -> fetch frequency
O(1) -> update frequency

overall O(1)

Space Complexity:

O(n+d)
n = total elements
d = distinct frequency values
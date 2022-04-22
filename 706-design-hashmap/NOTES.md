Let N be the total number of keys and K is the total number of buckets. Considering even distribution of keys, we can say that per bucket has N/K keys.
# Time Complexity
* put(key,value) - O(N/K)
* get(key) - O(N/K)
* remove(key) - O(N/K)
​
# Space Complexity
* O(K+M) M is number of unique keys inserted into hashmap.
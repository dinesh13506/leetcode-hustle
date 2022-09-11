/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    
    const mod = 1000000007n
    let input = []
    let answer = 0n
    let sum = 0n
    let minpq = new MinPriorityQueue()
    
    for(let i = 0; i < n; i++) {
        input.push([efficiency[i], speed[i]])
    }
    
    input.sort((a,b) => {
        return  b[0] - a[0] 
    })
    
    for(let i = 0; i < n; i++) {
        let minEfficiency = BigInt(input[i][0])
        if(minpq.size() > k - 1) {
           sum = sum - BigInt(minpq.dequeue().element)
        }
        minpq.enqueue(input[i][1])
        sum = sum + BigInt(input[i][1])
        if(answer <  (sum * minEfficiency)) {
            answer =  (sum * minEfficiency)
        }
    }
    return (answer % mod)
};
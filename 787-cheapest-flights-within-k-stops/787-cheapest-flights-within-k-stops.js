/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    
    let adjMatrix = new Array(n)
    for(let i = 0; i < n; i++) {
        adjMatrix[i] = new Array(n)
        adjMatrix[i].fill(0)
    }
    
    for(let flight of flights) {
        adjMatrix[flight[0]][flight[1]] = flight[2]
    }
    
    let memo = new Array(n)
    for(let i = 0; i < n; i++) {
        memo[i] = new Array(k+1)
        memo[i].fill(-1)
    }
    
    let dfs = (node, hops) => {
        if(node == dst) {
            return 0
        }
        if(hops < 0) {
            return Infinity
        }
        if(memo[node][hops] != -1) {
            return memo[node][hops]
        }
        let answer = Infinity
        for(let i = 0; i < n; i++) {
            if(adjMatrix[node][i] > 0) {
                let curr_ans = adjMatrix[node][i] + dfs(i, hops - 1)
                answer = Math.min(curr_ans, answer)
            }
        }
        memo[node][hops] =  answer
        return memo[node][hops]
    }
    
    let ans =  dfs(src, k)
    return (ans == Infinity ?  -1 :  ans )
};
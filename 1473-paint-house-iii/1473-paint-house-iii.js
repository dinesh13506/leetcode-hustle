/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function(houses, cost, m, n, target) {
    
    let totalHouses = houses.length
    let totalColors = cost[0].length
    let memo = new Array(m)
    for(let house = 0; house < m; house++) {
        memo[house] = new Array(target + 1)
        for(let t = 0; t <= target; t++) {
             memo[house][t] = new Array(totalColors + 1)
             memo[house][t].fill(-1)
        }
    }
    let dp = (currHouse, currNeighborHoods, prevColor) => {
        
        if(currHouse == totalHouses) {
            if(currNeighborHoods == target) {
                return 0
            } else {
                return Infinity
            }
        }
        if(currNeighborHoods > target) {
            return Infinity
        }
        if(memo[currHouse][currNeighborHoods][prevColor] != -1) {
            return memo[currHouse][currNeighborHoods][prevColor]
        }
        let minCost = Infinity
        //if house is painted
        if(houses[currHouse] != 0) {
            let count = (prevColor == houses[currHouse]) ? 0 : 1
            minCost = dp(currHouse + 1, currNeighborHoods + count, houses[currHouse])
        } else {
            for(let color = 1; color <= totalColors; color++) {
                let count = (prevColor == color) ? 0 : 1
                let currCost = cost[currHouse][color-1] + dp(currHouse + 1, currNeighborHoods + count, color)
                minCost  = Math.min(minCost, currCost)
            }
        }
        memo[currHouse][currNeighborHoods][prevColor] =  minCost
        return memo[currHouse][currNeighborHoods][prevColor]
    }
    
    let ans = dp(0, 0, 0)
    return ans == Infinity ? -1 : ans
};
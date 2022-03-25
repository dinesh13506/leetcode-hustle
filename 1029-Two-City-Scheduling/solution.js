/**
 * @param {number[][]} costs
 * @return {number}
 */
 var twoCitySchedCost = function(costs) {
    let n = costs.length / 2
    let minimumCost = 0
    for(let cost of costs) {
        let costDifference = cost[1] - cost[0]
        cost.push(costDifference)
    }
    costs.sort(function(cost1, cost2) {
        let costDifference1 = cost1[2]
        let costDifference2 = cost2[2]
        return  costDifference2 - costDifference1
    })
    
    let bucketA = n
    let bucketB = n
    let i = 0
    while((bucketA > 0 || bucketB >0) && i < 2*n) {
        if(bucketA) {
            minimumCost += costs[i][0]
            bucketA--
        } else {
             minimumCost += costs[i][1]
             bucketB--
        }
        i++
    }
    return minimumCost
};
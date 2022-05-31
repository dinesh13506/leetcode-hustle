/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    
    let min_capacity = 0
    let max_capacity = 0 
    let sum = 0
    for(let wt of weights) {
        sum += wt
    }
    max_capacity = sum
    
    let canShip = function(cap) {
        let target = cap
        let days_taken = 1
        let i = 0, sum = 0
        while( i < weights.length) {
            if(cap >= weights[i]) {
                cap = cap - weights[i]
            } else if(target < weights[i]) {
                return false
            }
            else {
                days_taken++
                cap = target
                cap = cap - weights[i]
            }
            i++
        }
        //console.log("days_taken ", days_taken, " cap ", target)
        if(days_taken > days) {
            return false
        }
        return true
    }
    
    //console.log(max_capacity)
    let start = 0, end = max_capacity
    let ans = end
    while(start <= end) {
        let mid = start + parseInt((end - start)/2)
        if(canShip(mid)) {
            ans = mid
            end = mid -1
        } else {
            start = mid + 1
        }
    }
    return ans
};
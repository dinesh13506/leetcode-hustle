/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const lodash = require("lodash");  

var canCompleteCircuit = function(gas, cost) {
    
    if(lodash.sum(gas) < lodash.sum(cost)) return -1
    let total = 0
    let res = 0
    const n = gas.length
    for(let i = 0; i < n; i++) {
        total += gas[i] - cost[i]
        if(total < 0) {
            total = 0
            res = i + 1
        }
    }
    return res
};
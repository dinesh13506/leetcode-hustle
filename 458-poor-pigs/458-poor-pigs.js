/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    
    let states = parseInt(minutesToTest / minutesToDie) + 1
    
    // states ^ x >= n
    
    return Math.ceil(Math.log(buckets)/ Math.log(states))
};
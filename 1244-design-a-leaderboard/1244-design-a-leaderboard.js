
let map = null
var Leaderboard = function() {
    map = new Map()
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if(map.has(playerId)) {
        map.set(playerId, score + map.get(playerId))
    } else {
        map.set(playerId, score + 0)
    }
    
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    
    let pids = [...map.keys()]
    //console.log(map)
    pids.sort(function(i,j) {
        if(map.get(i) == map.get(j)) {
            return 0
        } else if(map.get(i) > map.get(j)) {
            return -1
        } else {
            return 1
        }
    })
    //console.log(pids)
    let i = 0
    let sum = 0
    while( i < K) {
        sum = sum + (map.get(pids[i]) || 0)
        i++
    }
    return sum
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    map.delete(playerId)
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
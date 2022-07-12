/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    
    let sum = new Array(4)
    sum.fill(0)
    let perimeter = 0
    for(let len of matchsticks) {
        perimeter += len
    }
    if(perimeter % 4 != 0) {
        return false
    }
    let sideLength = perimeter / 4
    let dfs = (index) => {
        
        if(index == matchsticks.length) {
            return (sum[0] == sum[1]) && (sum[1] == sum[2]) && (sum[2] == sum[3]) && (sum[3] == sum[1])
        }
        
        for(let i = 0; i < 4; i++) {
            if(sum[i] + matchsticks[index] <= sideLength) {
                sum[i] += matchsticks[index]
                if(dfs(index + 1)) {
                    return true
                }
                sum[i] -= matchsticks[index]
            }
        }
        return false
    }
    matchsticks.sort((a,b) => {return b - a})
    return dfs(0)
};
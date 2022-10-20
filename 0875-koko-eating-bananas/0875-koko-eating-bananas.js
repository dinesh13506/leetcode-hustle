/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    
    let min_speed = 1, max_speed = Math.max(...piles);
    
    let canEat = (speed) => {
        let time = 0
        for(let pile of piles) {
            if(pile <= speed) {
                time++
            } else {
                time = time + parseInt(pile / speed);
                if(pile % speed != 0) {
                    time++
                }
            }
        }
        return time <= h;
    }
    
    let ans = max_speed;
    let low = min_speed, high = max_speed;
    while(low <= high) {
        let mid = low + parseInt((high - low) / 2);
        if(canEat(mid)) {
            ans = ans > mid ? mid : ans;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
};
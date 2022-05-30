/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    
    let min_k = 0
    let max_k = 0
    for(let banana_count of piles) {
        max_k += banana_count
    }
    
    let can_eat = function(speed) {
        let hours_taken = 0
        for(let banana_count of piles) {
            hours_taken += Math.ceil(banana_count/ speed)
        }
        return hours_taken <= h ? true : false
    }
    
    let speed =  max_k
    let low = min_k, high = max_k
    while(low <= high) {
        let mid = low + parseInt((high - low)/2)
        if(can_eat(mid) == true) {
            speed = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return speed
};
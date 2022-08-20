/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
    
    //if furl is enough then target can be reached without stops
    if(startFuel >= target) return 0
    
    let maxpq = new MaxPriorityQueue()
    let stops = 0
    let distance = startFuel //available fuel or distance which can be covered
    let i = 0
    while(distance < target) {
        /* cover all stations in which can reached from distance/available fuel*/
        while(i < stations.length && stations[i][0] <= distance) {
            maxpq.enqueue(stations[i][1])
            i++
        }
        /* if no station left to explore then return -1 */
        if(maxpq.size() <= 0) return -1
        distance = distance + maxpq.dequeue().element // add highest fuel station 
        stops++
    }
    return stops
    
};
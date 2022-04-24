
var UndergroundSystem = function() {
    this.checkInMap = new Map()  // key = id, value = {src : 'stationName', time : checkInTime}
    this.checkOutMap = new Map() // key = src_dest, value = {totalTime : totalTime, count : totalCount}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    let data = {
        src : stationName,
        inTime : t
    }
    this.checkInMap.set(id, data)
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let checkInData = this.checkInMap.get(id)
    let timeTaken = t - checkInData.inTime
    let src = checkInData.src
    let route = `${src}_${stationName}`
    let routeInfo = this.checkOutMap.get(route) || { timeTaken : 0, count: 0}
    routeInfo.timeTaken = routeInfo.timeTaken + timeTaken
    routeInfo.count = routeInfo.count + 1
    this.checkOutMap.set(route,routeInfo)
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let route = `${startStation}_${endStation}`
    let routeInfo = this.checkOutMap.get(route)
    let timeTaken =  routeInfo.timeTaken
    let count = routeInfo.count
    return timeTaken / count
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
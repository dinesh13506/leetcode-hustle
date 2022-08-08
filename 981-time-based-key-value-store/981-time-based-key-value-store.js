
var TimeMap = function() {
   this.map = new Map() 
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(this.map.has(key) == false) {
        this.map.set(key, [])
    }
    this.map.get(key).push([value, timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let events = this.map.get(key) || []
    if(events.length <= 0) return ""
    
    let start = 0, end = events.length-1, answer = ""
    while(start <= end) {
        let mid = start + parseInt((end - start) / 2)
        if(events[mid][1] == timestamp) {
            return events[mid][0]
        } else if(timestamp < events[mid][1]) {
            end = mid - 1
        } else {
            answer = events[mid][0]
            start = mid + 1
        }
    }
    return answer
    
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
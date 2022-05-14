
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
    if(this.map.has(key) === false) {
        this.map.set(key, new Map())
    }
    this.map.get(key).set(timestamp, value)
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let map = this.map.get(key)
    if(!map) {
        return ""
    }
    for(let t = timestamp; t>=0; t--) {
        if(map.has(t)) {
            return map.get(t)
        }
    }
    return ""
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
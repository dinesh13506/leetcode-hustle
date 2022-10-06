
var TimeMap = function() {
    this.store = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(this.store.has(key)) {
        this.store.get(key).push([value, timestamp])
    } else {
       this.store.set(key, [])
       this.store.get(key).push([value, timestamp])
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(this.store.has(key) == false) return ""
    let elements = this.store.get(key)
    let start = 0, end = elements.length - 1
    let index = -1
    while(start <= end) {
        let mid = start + parseInt((end - start) / 2)
        if(elements[mid][1] == timestamp) {
            index = mid
            start = mid + 1
        } else if(timestamp < elements[mid][1]) {
            end = mid - 1
        } else {
            index = Math.max(index, mid)
            start = mid + 1
        }
    }
    if(index != -1) {
        return elements[index][0]
    } else {
        return ""
    }
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
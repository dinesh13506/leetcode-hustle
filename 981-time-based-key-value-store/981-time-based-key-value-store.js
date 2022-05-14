
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
        this.map.set(key, [[timestamp, value]])
    }
    this.map.get(key).push([timestamp, value])
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
    let arr = this.map.get(key)
    let left = 0, right = arr.length 
    while(left < right) {
        let mid = parseInt((left + right)/2)
        let t = arr[mid][0]
        if(t <= timestamp) {
           left = mid + 1
            
        } else {
            right = mid-1
        }
    }
    if(right == 0) {
        return ""
    }
    //console.log(arr)
    return arr[right-1][1]
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
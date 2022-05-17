
var RecentCounter = function() {
    this.map = new Map()
    this.timestamps = []
    this.start = 0
    this.sum = 0
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    if(this.map.has(t)) {
        this.map.set(t, this.map.get(t) + 1)
    } else {
        this.map.set(t, 1)
    }
    
    this.timestamps.push(t)
    
    while(this.timestamps[this.start] > t || (this.timestamps[this.start] <  t- 3000)) {
        this.sum = this.sum - this.map.get(this.timestamps[this.start])
        this.start++
    }
    this.sum = this.sum + this.map.get(t)
    return this.sum
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
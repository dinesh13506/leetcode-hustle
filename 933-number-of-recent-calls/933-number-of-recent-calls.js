
var RecentCounter = function() {
    this.map = new Map()
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
    
    let times = this.map.keys()
    let ans = 0
    for(let time of times) {
        if(time <= t && time >= (t-3000)) {
            ans = ans + this.map.get(time)
        }
    }
    return ans
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
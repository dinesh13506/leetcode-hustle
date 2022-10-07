
var MyCalendar = function() {
    this.map = new Map()
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    this.map.set(start , (this.map.get(start) || 0) + 1)
    this.map.set(end , (this.map.get(end) || 0) - 1)
    
    let flag = false
    let keys = [...this.map.keys()]
    keys.sort((a,b) => {
        return a - b
    })
    
    let ans = 0, max = 0
    for(let time of keys) {
        ans += this.map.get(time)
        max = ans > max ? ans : max
        if(ans >= 2) {
            flag = true
            this.map.set(start , (this.map.get(start) || 0) - 1)
            this.map.set(end , (this.map.get(end) || 0) + 1)
            break
        }
    }
    if(flag) {
        return false
    } 
    return true
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
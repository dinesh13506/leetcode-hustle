
var MyCalendarThree = function() {
    this.diff = new Map()
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    
    this.diff.set(start, (this.diff.get(start) || 0 ) + 1)
    this.diff.set(end, (this.diff.get(end) || 0 ) - 1)
    let ans = 0, cur = 0
    let keys = [...this.diff.keys()]
    keys.sort((a,b) => { return a - b})
    for(let time of keys) {
        cur += this.diff.get(time)
        ans = Math.max(ans, cur)
    }
    return ans
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
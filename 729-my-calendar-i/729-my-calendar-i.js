
var MyCalendar = function() {
   this.events = [] 
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for(let ev of this.events) {
        if(ev[0] < end && ev[1] > start) {
            return false
        }
    }
    this.events.push([start,end])
    return true
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
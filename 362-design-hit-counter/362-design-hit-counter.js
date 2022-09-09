
var HitCounter = function() {
    this.queue = new Queue()
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.queue.enqueue(timestamp)
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    while(this.queue.size()) {
        let front = this.queue.front()
        if(timestamp - front >= 300) {
            this.queue.dequeue()
        }  else {
            break
        }
    }
    return this.queue.size()
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
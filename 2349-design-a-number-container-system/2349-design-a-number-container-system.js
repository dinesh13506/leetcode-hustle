
var NumberContainers = function() {
    this.indexmap = new Map()
    this.nums = new Map()
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    this.nums.set(index, number)
    if(this.indexmap.has(number) == false) {
        this.indexmap.set(number, new MinPriorityQueue())
    }
    this.indexmap.get(number).enqueue(index)
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    while (
      this.indexmap.get(number) &&
      this.indexmap.get(number).size() > 0 &&
      this.nums.get(this.indexmap.get(number).front().element) !== number
    ) {
      this.indexmap.get(number).dequeue();
    }

    return this.indexmap.get(number) && this.indexmap.get(number).size() > 0
      ? this.indexmap.get(number).front().element
      : -1
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
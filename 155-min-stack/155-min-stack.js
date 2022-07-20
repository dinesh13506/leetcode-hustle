
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length > 0 ) {
        let topNode = this.stack[this.stack.length - 1]
        if(val < topNode[0]) {
            this.stack.push([val, val])
        } else {
            this.stack.push([topNode[0], val])
        }
    } else {
        this.stack.push([val, val])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let topNode = this.stack.pop()
    return topNode[1]
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let topNode = this.stack[this.stack.length - 1]
    return topNode[1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let topNode = this.stack[this.stack.length - 1]
    return topNode[0]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
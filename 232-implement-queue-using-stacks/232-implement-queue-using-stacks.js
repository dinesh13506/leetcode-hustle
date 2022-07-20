
var MyQueue = function() {
    this.input_stack = []
    this.output_stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.input_stack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.output_stack.length > 0) {
        return this.output_stack.pop()
    } else {
        while(this.input_stack.length) {
            this.output_stack.push(this.input_stack.pop())
        }
        return this.output_stack.pop()
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.output_stack.length > 0) {
        return this.output_stack[this.output_stack.length - 1]
    } else {
        while(this.input_stack.length) {
            this.output_stack.push(this.input_stack.pop())
        }
        return this.output_stack[this.output_stack.length - 1]
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.input_stack.length == 0 && this.output_stack.length==0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
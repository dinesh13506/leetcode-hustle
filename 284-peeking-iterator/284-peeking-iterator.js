/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
    this.iter = iterator
    this.currValue = null
    this.nextValue = null
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    if(this.nextValue) {
        return this.nextValue
    } else {
        this.nextValue = this.iter.next()
        return this.nextValue
    }
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    if(this.nextValue != null ) {
        let ans = this.nextValue
        this.currValue = null
        this.nextValue = null
        return ans
    } else {
        if(this.hasNext()) {
            this.currValue = this.iter.next()
        }
        if(this.hasNext()) {
            this.nextValue = this.iter.next()
        }
        return this.currValue
    }
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    return this.nextValue ? true : this.iter.hasNext()
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
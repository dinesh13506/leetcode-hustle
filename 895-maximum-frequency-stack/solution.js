
var FreqStack = function() {
    this.freqMap = new Map()
    this.freqGroup = new Map() //grouping elements with same frequency, key -> freq, value-> stack of elements
    this.maxFrequency = 0
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    let freqValue = this.freqMap.get(val) || 0
    freqValue++
    this.freqMap.set(val,freqValue)
    this.maxFrequency = Math.max(this.maxFrequency,freqValue)
    let group = this.freqGroup.get(freqValue) || new Array()
    group.push(val)
    this.freqGroup.set(freqValue,group)
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let group = this.freqGroup.get(this.maxFrequency)
    let element = group.pop()
    if(group.length <=0) {
        this.maxFrequency--
    }
    let freqValue = this.freqMap.get(element)
    freqValue--
    this.freqMap.set(element,freqValue)
    return element
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    
    let n1 = v1.length, n2 = v2.length
    let i = 0 , j = 0
    let counter = 0
    let result = []
    while( i < n1 && j < n2) {
        if(counter == 0) {
            result.push(v1[i])
            i++
            first = false
        } else {
            result.push(v2[j])
            j++
            first = true
        }
        counter++
        counter = counter % 2
    }
    while(i < n1) {
        result.push(v1[i])
        i++
    }
    while(j < n2) {
        result.push(v2[j])
        j++
    }
    
    //console.log(result)
    this.result = result
    this.index = 0
    this.length = n1 + n2
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    if(this.index < this.length) {
        return true
    }
    return false
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    return this.result[this.index++]
    
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
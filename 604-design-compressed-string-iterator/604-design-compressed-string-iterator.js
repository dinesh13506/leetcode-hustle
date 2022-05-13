/**
 * @param {string} compressedString
 */
var StringIterator = function(compressedString) {
    
    this.arr = compressedString.split('')
    this.index = 1
    let num = []
    this.final = []
    for(let ch of this.arr) {
        if(ch >= '0' && ch <= '9') {
            num.push(ch)
        } else {
            if(num.length) {
                 this.final.push(num.join(''))
            }
             this.final.push(ch)
            num = []
        }
    }
    if(num.length) {
        this.final.push(num.join(''))
    }
    //console.log(this.final)
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function() {
    if(this.index >= this.final.length) {
        return ' '
    } else {
        let prev = this.final[this.index-1]
        this.final[this.index] = parseInt(this.final[this.index])
        this.final[this.index]--
        if(this.final[this.index] == 0) {
            this.index = this.index + 2
        }
        return prev
    }
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function() {
    return this.index < this.final.length ? true : false
};

/** 
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
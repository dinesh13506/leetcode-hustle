/**
 * @param {number[][]} vec
 */
var Vector2D = function(vec) {
    this.res = []
    for(let arr of vec) {
        this.res.push(...arr)
    }
    //console.log(this.res)
    this.cur = 0
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
    return this.res[this.cur++]
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
    if(this.cur < this.res.length) return true
    return false
};

/** 
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
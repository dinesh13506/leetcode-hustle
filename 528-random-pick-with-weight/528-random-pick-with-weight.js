/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.w = w
    this.total = 0
    this.prefixsum = []
    for(let wt of w) {
        this.total += wt
        this.prefixsum.push(this.total)
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    
    let prob = Math.random()
    let target = this.total * prob
    let i = 0
    for(let sum of this.prefixsum) {
        if(target < sum) {
            return i
        }
        i++
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
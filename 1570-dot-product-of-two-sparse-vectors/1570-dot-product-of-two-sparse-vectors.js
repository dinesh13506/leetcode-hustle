/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.pairs = []
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]!=0) {
            let pair = [i,nums[i]]
            this.pairs.push(pair)
        }
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let p1 = this.pairs
    let p2 = vec.pairs
    let i = 0, j = 0, ans = 0
    while( i < p1.length && j < p2.length) {
        if(p1[i][0] === p2[j][0]) {
            ans = ans + (p1[i][1] * p2[j][1])
            i++
            j++
        } else if( p1[i][0] < p2[j][0]) {
            i++
        } else {
            j++
        }
    }
    return ans
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.map = new Map()
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]!=0) {
            this.map.set(i, nums[i])
        }
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let ans = 0
    let map1 = this.map
    let map2 = vec.map
    for(let k1 of map1.keys()) {
        if(map2.has(k1)) {
            ans = ans + (map1.get(k1) * map2.get(k1))
        }
    }
    return ans
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
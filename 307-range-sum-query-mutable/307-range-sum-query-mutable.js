class SegmentTree {
    constructor(nums) {
        const n = nums.length
        this.nums = nums
        this.tree = new Array(4 * n) // 4*n is the upper bound of size of segment tree
        this.tree.fill(0)
        let start_index = 0, end_index = n - 1, node_index = 0
        this.constructTree(start_index, end_index, node_index)
        //console.log(this.tree)
    }
    constructTree(start_index, end_index, node_index) {
        if(start_index > end_index) {
            return 0
        }
        if(start_index == end_index) {
            this.tree[node_index] = this.nums[start_index]
            return this.tree[node_index]
        }
        
        let mid = parseInt ( (start_index + end_index) / 2 )
        this.tree[node_index] = this.constructTree(start_index, mid, 2 * mid + 1) 
                                + this.constructTree(mid + 1, end_index, 2 * mid + 2)
        return this.tree[node_index]
    }
    
    getQuerySum(start_index, end_index, query_start_index, query_end_index, node_index) {
        if(query_end_index < start_index || query_start_index > end_index) {
            return 0
        }
        if(query_start_index <= start_index && end_index <= query_end_index) {
            return this.tree[node_index]
        }
        
        let mid = parseInt ( (start_index + end_index) / 2 )
        return this.getQuerySum(start_index, mid, query_start_index, query_end_index, 2 * mid + 1)
                + this.getQuerySum(mid + 1, end_index, query_start_index, query_end_index, 2 * mid + 2)
    }
    
    update(start_index, end_index,index, diff, node_index) {
        if(index < start_index || index > end_index) {
            return
        }
        this.tree[node_index] = this.tree[node_index] + diff
        if(start_index < end_index) {
            let mid = parseInt ( (start_index + end_index) / 2 )
            this.update(start_index, mid, index, diff, 2 * mid + 1)
            this.update(mid + 1, end_index, index, diff, 2 * mid + 2)
        }
    }
}


/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums
    this.segmentTree = new SegmentTree(this.nums)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    let diff = val - this.nums[index]
    this.nums[index] = val
    let start_index = 0, end_index = this.nums.length - 1, node_index = 0
    this.segmentTree.update(start_index, end_index, index, diff, node_index)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let start_index = 0, end_index = this.nums.length - 1, node_index = 0
    return this.segmentTree.getQuerySum(start_index, end_index, left, right, node_index)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
class SegmentTree {
    constructor(nums) {
        const n = nums.length
        const tree_size = 4 * n
        this.nums = nums
        this.tree = new Array(tree_size)
        this.tree.fill(0)
        let start_index = 0, end_index = n - 1, node_index = 0
        this.constructSegmentTree(start_index, end_index, node_index)
        //console.log(this.tree)
    }
    
    getLeftChild(i) {
        return 2 * i + 1
    }
    
    getRightChild(i) {
        return 2 *i + 2
    }
    
    getMid(start_index, end_index) {
        return parseInt( (start_index + end_index) / 2)
    }
    
    constructSegmentTree(start_index, end_index, node_index) {
        
        if(end_index < start_index) return 0
        
        if(start_index == end_index) {
            this.tree[node_index] = this.nums[start_index]
            return this.tree[node_index]
        }
        
        let mid = this.getMid(start_index, end_index)
        this.tree[node_index] = this.constructSegmentTree(start_index, mid, this.getLeftChild(mid))
                                + this.constructSegmentTree(mid + 1, end_index, this.getRightChild(mid))
        return this.tree[node_index]
    }
    
    getSum(start_index, end_index, node_index, start, end) {
        //console.log(start, end, start_index, end_index)
        if(end < start_index || start > end_index) {
            return 0
        }
        if(start <= start_index && end_index <= end) {
            return this.tree[node_index]
        }
        let mid = this.getMid(start_index, end_index)
        return this.getSum(start_index, mid, this.getLeftChild(mid), start, end ) + 
                this.getSum(mid + 1, end_index, this.getRightChild(mid), start, end) 
    }
}

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.segment_tree = new SegmentTree(nums)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let start_index = 0, end_index = this.segment_tree.nums.length - 1, node_index = 0
    return this.segment_tree.getSum(start_index, end_index, node_index,left, right)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
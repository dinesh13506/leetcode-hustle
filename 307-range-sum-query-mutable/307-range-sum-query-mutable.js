class SegmentTree {
    constructor(nums) {
        const n = nums.length
        const tree_size = 4 * n
        this.nums = nums
        this.tree = new Array(tree_size)
        this.tree.fill(0)
        this.constructTree(0, n - 1, 0)
    }
    
    getMid(start_index, end_index) {
        return parseInt((start_index + end_index) / 2)
    }
    
    left(node_index) {
        return 2 * node_index + 1
    }
    
    right(node_index) {
        return this.left(node_index) + 1
    }
    
    constructTree(start_index, end_index, node_index) {
        if(start_index > end_index) {
            return
        }
        if(start_index == end_index) {
            this.tree[node_index] = this.nums[start_index]
            return this.tree[node_index]
        }
        let mid = this.getMid(start_index, end_index)
        this.tree[node_index] = this.constructTree(start_index, mid, this.left(node_index)) + this.constructTree(mid + 1, end_index, this.right(node_index))
        return this.tree[node_index]
    }
    
    sumRange(start_index, end_index, node_index, q_start, q_end) {
        //console.log(start_index, end_index, node_index, q_start, q_end)
        //out of range condition
        if(q_end < start_index || q_start > end_index) {
            return 0
        }
        if(q_start <= start_index && end_index <= q_end) {
            return this.tree[node_index]
        }
        
        let mid = this.getMid(start_index, end_index)
        return this.sumRange(start_index, mid, this.left(node_index), q_start, q_end) + this.sumRange(mid + 1, end_index , this.right(node_index), q_start, q_end)
    }
    
    update(start_index, end_index, node_index, index, diff) {
        if(index < start_index || index > end_index) {
            return 
        }
        this.tree[node_index] = this.tree[node_index] + diff
        if(start_index < end_index) {
            let mid = this.getMid(start_index, end_index)
            
            this.update(start_index, mid, this.left(node_index), index, diff)
            this.update(mid + 1, end_index, this.right(node_index), index, diff)
        }
    }
}

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.segment_tree = new SegmentTree(nums)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    let diff = val - this.segment_tree.nums[index]
    this.segment_tree.nums[index] = val
    let start_index = 0, end_index = this.segment_tree.nums.length - 1, node_index = 0
    this.segment_tree.update(start_index, end_index, node_index, index,diff)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
     let start_index = 0, end_index = this.segment_tree.nums.length - 1, node_index = 0
     return this.segment_tree.sumRange(start_index, end_index, node_index, left, right)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
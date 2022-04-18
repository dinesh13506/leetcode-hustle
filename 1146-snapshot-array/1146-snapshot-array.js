/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.map = new Map()
    this.arr = new Array()
    this.arr.fill(0)
    this.snap_id = 0
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.arr[index] = val
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    let copy = this.arr.slice()
    this.map.set(this.snap_id, copy)
    this.snap_id++
    //console.log(this.map)
    return this.snap_id - 1
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    let copy = this.map.get(snap_id)
    if(!copy) {
        return null
    }
    return copy[index]  ? copy[index] : null
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
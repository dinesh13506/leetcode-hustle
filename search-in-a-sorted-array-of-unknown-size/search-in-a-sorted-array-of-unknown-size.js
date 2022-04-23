/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
    let start = 0
    let end = Number.MAX_SAFE_INTEGER
    while( end >= start) {
        let mid = parseInt((start+end)/2)
        if(reader.get(mid) === target) {
            return mid
        } else if(reader.get(mid) < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return -1
};
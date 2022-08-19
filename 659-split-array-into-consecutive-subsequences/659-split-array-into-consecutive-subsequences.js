/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    
    let freqmap = new Map() 
    for(let num of nums) {
        freqmap.set(num, (freqmap.get(num) || 0) + 1)
    }
    let subseqmap = new Map()
    
    for(let num of nums) {
        if(freqmap.get(num) <= 0) {
            continue
        }
        let last = num - 1
        let second = num + 1
        let third = num + 2
        
        /* check if subseq ending with num -1 exists */
        if(subseqmap.get(last) > 0) {
            subseqmap.set(last, subseqmap.get(last) - 1) /* reduce subseq ending with last */
            subseqmap.set(num, ( subseqmap.get(num) || 0)  + 1) /* increase subseq ending with num */
            freqmap.set(num, freqmap.get(num)  - 1) /* reduce freq of num */
        }
        /* check if num , num+1, num+2 can be formed */
        else if(freqmap.get(second) > 0 && freqmap.get(third) > 0) {
                freqmap.set(num, freqmap.get(num)  - 1) /* reduce freq of num */
                freqmap.set(second, freqmap.get(second)  - 1) /* reduce freq of num + 1 */
                freqmap.set(third, freqmap.get(third)  - 1) /* reduce freq of num + 2 */
                subseqmap.set(third, ( subseqmap.get(third) || 0)  + 1) /* increase subseq ending with num+2*/
        } else {
            return false
        }
    }
    return true
};
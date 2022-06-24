/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
    
    let mxpq = new MaxPriorityQueue()
    let totalSum = 0
    for(let num of target) {
        mxpq.enqueue(num)
        totalSum += num
    }
    
    while(true) {
        let max = mxpq.front().element
        mxpq.dequeue()
        totalSum = totalSum - max
        if(max == 1 || totalSum == 1) {
            return true
        }
        if(max < totalSum || totalSum == 0 || (max% totalSum) == 0){
           return false
        }
        
        let rem = max % totalSum
        totalSum = totalSum + rem
        mxpq.enqueue(rem)
        
    }
    
    
};
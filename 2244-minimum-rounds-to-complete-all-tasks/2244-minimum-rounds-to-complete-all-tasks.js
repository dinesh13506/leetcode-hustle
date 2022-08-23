/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    
    let map = new Map()
    for(let task of tasks) {
        let count = map.get(task) || 0
        count++
        map.set(task, count)
    }
    
    let maxpq = new MaxPriorityQueue()
    let ans = 0
    for(let key of map.keys()) {
        if(map.get(key) <= 1) return -1
        maxpq.enqueue(map.get(key))
    }
    //console.log(map)
    
    while(maxpq.isEmpty() == false) {
        let count = maxpq.dequeue().element
        if(count <= 1) {
            return -1
        }
        ans++
        
        if(count == 3 || count == 2) {
            continue
        }
        
        if( (count - 3) % 2 == 0 || (count - 3) % 3 == 0) {
            maxpq.enqueue(count-3)
        } else {
            maxpq.enqueue(count-2)
        }
    }
    return ans
};
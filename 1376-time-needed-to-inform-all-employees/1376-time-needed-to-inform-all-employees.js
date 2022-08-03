/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    
    let map = new Map()
    for(let i = 0; i < n; i++) {
        let mgr = manager[i]
        if(mgr == -1) continue
        if(map.has(mgr) == false) {
            map.set(mgr, [])
        }
        map.get(mgr).push(i)
    }
    //console.log(map)
    let time = 0
    let queue = new Queue()
    queue.enqueue([headID, 0])
    while(queue.isEmpty() == false) {
        let temp = new Queue()
        while(queue.isEmpty() == false) {
            let [id, tw] = queue.dequeue()
            time = Math.max(time, tw)
            let reporties = map.get(id) || []
            for(let rp of reporties) {
                temp.enqueue([rp, tw + informTime[id]])
            }
        }
        queue = temp
    }
    return time
};
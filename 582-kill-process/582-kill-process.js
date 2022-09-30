/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
    
    let map = new Map()
    const n = pid.length
    for(let i = 0; i < n; i++) {
        let process_id = pid[i]
        let parent_id = ppid[i]
        if(parent_id > 0) {
            let children = map.get(parent_id) || []
            children.push(process_id)
             map.set(parent_id, children)
        }
    }
    
    let ans = []
    let queue = new Queue()
    queue.enqueue(kill)
    
    while(queue.isEmpty() == false) {
        let curr = queue.dequeue()
        ans.push(curr)
        let children = map.get(curr) || []
        if(children && children.length > 0) {
            for(let child of children) {
                queue.enqueue(child)
            }
        }
    }
    return ans
};
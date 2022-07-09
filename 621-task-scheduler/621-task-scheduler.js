/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    
    let total_tasks = tasks.length
    let freq = new Array(26)
    freq.fill(0)
    for(let task of tasks) {
        let index = task.charCodeAt() - 'A'.charCodeAt()
        freq[index]++
    }
    
    
    freq.sort((a,b) => { return a - b })
    let max_freq = freq[25]
    
    let slots = max_freq - 1
    let idle_time = slots * n
    for(let i = freq.length-2; (i >=0  && idle_time > 0); i--) {
        idle_time -= Math.min(slots, freq[i])
    }
    idle_time = Math.max(0, idle_time)
    return total_tasks + idle_time
};
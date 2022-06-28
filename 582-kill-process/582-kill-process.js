/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
    
    let childMap = new Map()
    for(let parent of ppid) {
        childMap.set(parent, [])
    }
    
    for(let i = 0; i < ppid.length; i++) {
        childMap.get(ppid[i]).push(pid[i])
    }
    
    
    let ans = []
    let dfs = (kill) => {
        ans.push(kill)
        if(childMap.has(kill)) {
            for(let child of childMap.get(kill)) {
                dfs(child)
            }
        }
    }
    dfs(kill)
    return ans
};
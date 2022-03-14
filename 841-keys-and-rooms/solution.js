/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
    const n = rooms.length
    let visited = new Array(n)
    visited.fill(false)
    let count = 0
    let dfsUtil = function(start) {
        visited[start] = true
        count++
        let neighbours = rooms[start]
        for(const neighbour of neighbours) {
            if(visited[neighbour] === false){
                dfsUtil(neighbour)
            }
        }
    }
    
    dfsUtil(0)
    return count === n ? true : false
};
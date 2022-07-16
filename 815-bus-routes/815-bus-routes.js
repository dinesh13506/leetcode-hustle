/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    
    let standToBusMap = new Map()
    for(let i = 0; i < routes.length; i++) {
        let busNo = i
        for(let bstand of routes[busNo]) {
            let buses = standToBusMap.get(bstand) || []
            buses.push(busNo)
            standToBusMap.set(bstand, buses)
        }
    }
    //console.log(standToBusMap)
    let visited_stand = new Map()
    let queue = new Queue()
    queue.enqueue([source, 0])
    visited_stand.set(source, true)
    
    while(queue.isEmpty() == false) {
        let [bstand, b_count] = queue.dequeue()
        
        if(bstand == target) {
            return b_count
        }
        for(let bus of standToBusMap.get(bstand)) {
            for(let stand of routes[bus]) {
                if(visited_stand.has(stand) == false) {
                    visited_stand.set(stand, true)
                    queue.enqueue([stand, b_count + 1])
                }
            }
            routes[bus] = []
        }
    }
    return -1
};
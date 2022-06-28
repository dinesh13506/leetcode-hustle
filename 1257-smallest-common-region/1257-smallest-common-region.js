/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function(regions, region1, region2) {
    
    let map = new Map()
    for(let region of regions) {
        let parent = region[0]
        for(let i = 1; i < region.length; i++) {
            let child = region[i]
            map.set(child, parent)
        }
    }
    
    let path = new Set()
    
    let ptr = region1
    while(ptr) {
        path.add(ptr)
        ptr = map.get(ptr)
    }
    
    ptr = region2
    while(ptr) {
        if(path.has(ptr)) {
            return ptr
        }
        ptr = map.get(ptr)
    }
    return null
};
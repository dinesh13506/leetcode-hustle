/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    
    let map = new Map()
    for(let cpdomain of cpdomains) {
        
        let temp = cpdomain.split(" ")
        let count = parseInt(temp[0])
        let domains = temp[1].split(".")
        let key = ""
        for(let i = domains.length-1; i >=0; i--) {
            key = key.length ? domains[i] + "." + key  : domains[i]
            if(map.has(key)) {
                map.set(key, map.get(key) + count)
            } else {
                map.set(key,count)
            }
        }
    }
    
    //console.log(map)
    let result = []
    for(let key of map.keys()) {
        result.push(map.get(key) + " " + key)
    }
    return result
};
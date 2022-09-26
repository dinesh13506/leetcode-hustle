/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    
    let adjList = new Map()
    for(let eq of equations) {
        let u = eq[0]
        let sign = eq[1] + eq[2]
        let v = eq[3]
        if(sign == "!=" && u == v) return false
        
        if(sign == "==") {
            if(adjList.has(u) == false) {
                adjList.set(u, [])
            }
            adjList.get(u).push(v)
            if(adjList.has(v) == false) {
                adjList.set(v, [])
            }
            adjList.get(v).push(u)
        }
    }
    
   
    let visited = new Set()
    let components = []
    
    let dfs = (u,component) => {
         if(visited.has(u))  {
             return;
         }
         component.push(u)
         visited.add(u)
         let neighbors = adjList.get(u)
         for(let v of neighbors) {
             dfs(v,component)
         }
    }
    for(let u of adjList.keys()) {
        if(visited.has(u) == false)  {
            let component = []
            dfs(u,component)
            components.push(component)
        }   
    }
    for(let eq of equations) {
         let u = eq[0]
         let sign = eq[1] + eq[2]
         let v = eq[3]
         if(sign == "!=" && u == v) return false
         if(sign == "==" && u == v) continue
         if(sign == "!=") {
             for(let comp of components) {
                 if(comp.includes(u) && comp.includes(v)) return false
             }
         } 
    }
    return true
};
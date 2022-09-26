/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    
    let adjList1 = new Map()
    for(let eq of equations) {
        let u = eq[0]
        let sign = eq[1] + eq[2]
        let v = eq[3]
        if(sign == "!=" && u == v) return false
        
        if(sign == "==") {
            if(adjList1.has(u) == false) {
                adjList1.set(u, [])
            }
            adjList1.get(u).push(v)
            if(adjList1.has(v) == false) {
                adjList1.set(v, [])
            }
            adjList1.get(v).push(u)
        }
    }
    
   
    let visited1 = new Set()
    let components1 = []
    
    let dfs = (u, visited,adjList,component) => {
         if(visited.has(u))  {
             return;
         }
         component.push(u)
         visited.add(u)
         let neighbors = adjList.get(u)
         for(let v of neighbors) {
             dfs(v,visited, adjList,component)
         }
    }
    for(let u of adjList1.keys()) {
        if(visited1.has(u) == false)  {
            let component = []
            dfs(u, visited1, adjList1,component)
            components1.push(component)
            //console.log(component)
        }   
    }
    
    
    // console.log(components1)
    for(let eq of equations) {
         let u = eq[0]
         let sign = eq[1] + eq[2]
         let v = eq[3]
         if(sign == "!=" && u == v) return false
         if(sign == "==" && u == v) continue
         if(sign == "!=") {
             for(let comp of components1) {
                 if(comp.includes(u) && comp.includes(v)) return false
             }
         } 
    }
    return true
    
    
    
};
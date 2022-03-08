/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
 var countComponents = function(n, edges) {
    
    let rep = new Array(n)
    let rank = new Array(n)
    
    for( let i = 0; i < n; i++) {
        rep[i] = i
        rank[i] = 0
    }
    
    
    for( let edge of edges) {
        let v1 = edge[0]
        let v2 = edge[1]
        union(v1,v2,rep,rank)
    }
    
    let count = 0
    for( let i = 0; i < n; i++) {
        if(rep[i] == i) {
            count++
        }
    }
    
    return count
};


let find = function(v,rep) {
    if( rep[v] == v ) {
        return v
    }
    rep[v] = find(rep[v],rep)
    return rep[v]
}

let union = function(v1,v2,rep,rank) {
    let rep_v1 = find(v1,rep)
    let rep_v2 = find(v2,rep)
    
    if(rep_v1 == rep_v2) {
        return 
    }
    
    if(rank[rep_v1] > rank[rep_v2]) {
        rep[rep_v2] = rep_v1
    } else if(rank[rep_v1] < rank[rep_v2]) {
        rep[rep_v1] = rep_v2
    } else {
        rep[rep_v2] = rep_v1
        rank[rep_v1]++
    }
 }
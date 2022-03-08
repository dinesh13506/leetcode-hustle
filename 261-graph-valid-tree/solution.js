/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
 var validTree = function(n, edges) {
    
    let parent = new Array(n)
    let rank = new Array(n)
    
    for( let i = 0; i < n; i++ ) {
        parent[i] = i
        rank[i] = 0
    }
    
    for( let e of edges) {
        let v1 = e[0]
        let v2 = e[1]
        
        if(union(v1,v2,rank,parent) == false ) {
            return false
        }
    }
    
    let count = 0
    
    for( let i = 0; i < n; i++) {
        if(parent[i] == i) {
            count++
        }
    }
    
    return count == 1 ? true : false
    
    
};

let find = function(v,parent) {
    if(v == parent[v]) {
        return v
    }
    parent[v] = find(parent[v],parent)
    return parent[v]
}

let union = function(v1,v2,rank,parent) {
    let rep_v1 = find(v1,parent)
    let rep_v2 = find(v2,parent)
    
    if(rep_v1 == rep_v2) {
        return false
    }
    
    if(rank[rep_v1] > rank[rep_v2]) {
        parent[rep_v2] = rep_v1
    } else if(rank[rep_v1] < rank[rep_v2]) {
        parent[rep_v1] = rep_v2
    } else {
        parent[rep_v2] = rep_v1
        rank[rep_v1]++
    }
    return true
}
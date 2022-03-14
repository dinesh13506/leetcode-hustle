/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) {
    
    let ans = null
    let n = edges.length - 1
    let rep = new Array(n)
    let rank = new Array(n)
    
    for(let i = 0; i < n; i++) {
        rep[i] = i
        rank[i] = 0
    }
    
    for(let j = 0 ; j < edges.length ; j++) {
        let v1 = edges[j][0] - 1
        let v2 = edges[j][1] - 1
        
        if( union(v1,v2,rep,rank) === false) {
            ans = edges[j]
        }
    }
    
    return ans
};


let find = function(v,parent) {
    if(parent[v] == v) {
        return v
    }
    parent[v] = find(parent[v],parent)
    return parent[v]
}

let union = function(v1,v2,parent,rank) {
    
    let rep_v1 = find(v1,parent)
    let rep_v2 = find(v2,parent)
    if(rep_v1 === rep_v2) {
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
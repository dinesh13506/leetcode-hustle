/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
 var minimumCost = function(n, connections) {
    
    let rep = new Array(n+1)
    let rank = new Array(n+1)
    
    for(let i =1; i<=n;i++) {
        rep[i] = i
        rank[i] = 0
    }
    
    connections.sort(function(c1,c2) { return c1[2] - c2[2] })
    
    //console.log(connections)
    if(connections.length < n-1) {
        return -1
    }
    
    let c = 0
    let i = 0
    let ans = 0
    while( c <= n-1 && i < connections.length) {
        
        let connection = connections[i]
        let v1 = connection[0]
        let v2 = connection[1]
        let cost = connection[2]
        
        let rep_v1 = find(v1,rep)
        let rep_v2 = find(v2,rep)
        
        if(rep_v1 != rep_v2) {
            c++
            ans = ans + cost
            union(v1,v2,rep,rank)
        }
        i++
    }
    
    //console.log(rep)
    let connected_comp = 0
    for(let i =1; i<=n;i++) {
        if(rep[i]==i) {
            connected_comp++
        }
    }
    return connected_comp == 1 ? ans : -1
};

let find = function(v,rep) {
    if(rep[v] == v) {
        return v
    }
    rep[v] = find(rep[v],rep)
    return rep[v]
} 

let union = function(v1,v2,rep,rank) {
    
    let rep_v1 = find(v1,rep)
    let rep_v2 = find(v2,rep)
    
    if(rep_v1 == rep_v2) return;
    
    if(rank[rep_v1] > rank[rep_v2]) {
        rep[rep_v2] = rep_v1
    } else if(rank[rep_v2] > rank[rep_v1]) {
        rep[rep_v1] = rep_v2
    } else {
        rep[rep_v2] = rep_v1
        rank[rep_v1]++
    }
}


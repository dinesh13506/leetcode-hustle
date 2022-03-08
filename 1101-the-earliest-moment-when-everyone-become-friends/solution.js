/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
 var earliestAcq = function(logs, n) {
    
    let parent = new Array(n)
    let rank = new Array(n)
    
    for(let i=0; i<n;i++) {
        parent[i] = i
        rank[i] = 0
    }
    
    logs.sort(function(log1,log2) { return log1[0] - log2[0]})
    let ans = null
    for( let log of logs ) {
        let ts = log[0]
        let v1 = log[1]
        let v2 = log[2]
        
        let connected = isconnected(v1,v2,parent)
        //console.log(connected)
        if(connected == true) {
            continue
        } else {
            ans = ts
            //console.log(ans)
            union(v1,v2,parent,rank)
        }
    }
    
    let count = 0
    for(let i=0; i<n;i++) {
        if(parent[i] == i) {
            count++
        }
    }
    return count > 1 ? -1 : ans
    
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
    //console.log(v1,v2,rep_v1,rep_v2)
    if(rep_v1 == rep_v2) {
        return
    }
    
    if(rank[rep_v1] > rank[rep_v2]) {
        parent[rep_v2] = rep_v1
    } else if( rank[rep_v2] > rank[rep_v1]) {
        parent[rep_v1] = rep_v2
    } else {
        parent[rep_v2] = rep_v1
        rank[rep_v1]++
    }
}

let isconnected = function(v1,v2,parent) {
    let rep_v1 = find(v1,parent)
    let rep_v2 = find(v2,parent)
    //console.log(v1,v2,rep_v1,rep_v2)
    return rep_v1 == rep_v2
}



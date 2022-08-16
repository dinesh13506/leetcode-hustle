/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    
    let m = mat.length, n = mat[0].length
    const dist = new Array(m)
    for(let r = 0;  r < m; r++) {
        dist[r] = new Array(n)
        dist[r].fill(Infinity)
    }
    
    let queue = new Queue()
    for(let r = 0;  r < m; r++) {
        for(let c = 0; c < n; c++) {
            if(mat[r][c] == 0) {
                dist[r][c] = 0
                queue.enqueue([r,c])
            }
        }
    }
    
    let dir = [
        [-1,0],
        [1,0],
        [0,-1],
        [0,1]
    ]
    while(queue.size()) {
        let [r,c] = queue.dequeue()
        for(let d of dir) {
            let rnew = r + d[0], cnew = c + d[1]
            if(rnew >=0 && rnew < m && cnew >=0 && cnew < n) {
                if(dist[rnew][cnew] > dist[r][c] + 1) {
                    dist[rnew][cnew] = dist[r][c] + 1
                    queue.enqueue([rnew, cnew])
                }
            }
        }
    }
    return dist
};
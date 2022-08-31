/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let m = heights.length, n = heights[0].length
    let visited = new Array(m)
    for(let i = 0; i < m; i++) {
        visited[i] = new Array(n)
        visited[i].fill(0)
    }
    
    let queue = new Queue()
    for(let i = 0; i < m; i++) {
        queue.enqueue([i,0])
    }
    for(let j = 1; j < n; j++) {
        queue.enqueue([0,j])
    }
    while(queue.isEmpty() == false) {
        let cell = queue.dequeue()
        visited[cell[0]][cell[1]] = 1
        const dir = [[-1,0],[1,0],[0,-1],[0,1]]
        for(let d of dir) {
            let x = cell[0] + d[0]
            let y = cell[1] + d[1]
            if(x >= 0 && y >= 0 && x < m && y < n && visited[x][y] == 0) {
                if(heights[cell[0]][cell[1]] <= heights[x][y]) {
                    queue.enqueue([x,y])
                }
            }
        }
    }
    //console.log(visited)
    for(let i = 0; i < m; i++) {
        queue.enqueue([i,n-1])
    }
    for(let j = 0; j < n; j++) {
        queue.enqueue([m-1,j])
    }
    let visited2 = new Array(m)
    for(let i = 0; i < m; i++) {
        visited2[i] = new Array(n)
        visited2[i].fill(0)
    }
    while(queue.isEmpty() == false) {
        let cell = queue.dequeue()
        visited2[cell[0]][cell[1]] = 1
        const dir = [[-1,0],[1,0],[0,-1],[0,1]]
        for(let d of dir) {
            let x = cell[0] + d[0]
            let y = cell[1] + d[1]
            if(x >= 0 && y >= 0 && x < m && y < n && visited2[x][y] == 0) {
                if(heights[cell[0]][cell[1]] <= heights[x][y]) {
                    queue.enqueue([x,y])
                }
            }
        }
    }
    
    //console.log(visited2)
    let ans = []
    for(let i = 0; i < m; i++) {
       for(let j = 0; j < n; j++) {
           if(visited[i][j] == 1 && visited2[i][j] == 1) {
               ans.push([i,j])
           }
       }
    }
    return ans
};
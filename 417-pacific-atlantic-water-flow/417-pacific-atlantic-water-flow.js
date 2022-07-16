/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    
    let m = heights.length, n = heights[0].length
    let cells = []
    if(m == 0 && n ==0) {
        return cells
    }
    
    let visitedp = new Array(m)
    let visiteda = new Array(m)
    for(let i = 0; i < m; i++) {
        visitedp[i] = new Array(n)
        visitedp[i].fill(false)
        visiteda[i] = new Array(n)
        visiteda[i].fill(false)
    }
    
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    let pacificQueue = new Queue()
    let atlanticQueue = new Queue()
    for(let r = 0; r < m; r++) {
        pacificQueue.enqueue([r,0])
        visitedp[r][0] = true
        atlanticQueue.enqueue([r, n-1])
        visiteda[r][n-1] = true
    }
    
    for(let c = 0; c < n; c++) {
        pacificQueue.enqueue([0,c])
        visitedp[0][c] = true
        atlanticQueue.enqueue([m-1, c])
        visiteda[m-1][c] = true
    }
    
    let bfs = (visited, queue) => {
        while(queue.isEmpty() == false) {
            let cell = queue.dequeue()
            for(let dir of dirs) {
                let newr = cell[0] + dir[0]
                let newc = cell[1] + dir[1]
                if(newr < 0 || newr >= m || newc < 0 || newc >= n) {
                    continue
                }
                if(visited[newr][newc] == false && heights[newr][newc] >= heights[cell[0]][cell[1]]) {
                    visited[newr][newc] = true
                    queue.enqueue([newr, newc])
                }
            }
        }
    }
    
    // console.log(visiteda)
    // console.log(visitedp)
    bfs(visitedp, pacificQueue)
    bfs(visiteda, atlanticQueue)
    // console.log(visiteda)
    // console.log(visitedp)
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(visiteda[i][j] == true && visitedp[i][j] == true) {
                cells.push([i,j])
            }
        }
    }
    return cells
};
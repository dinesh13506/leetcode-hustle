/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    let m = grid.length, n = grid[0].length
    
    let queue = new Queue()
    let time = -1
    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            if(grid[r][c] == 2) {
                queue.enqueue([r,c])
            }
        }
    }
    time++
    
    const dir = [
        [-1,0],
        [1,0],
        [0,1],
        [0,-1]
    ]
    
    while(queue.isEmpty() == false) {
        let temp = new Queue()
        while(queue.isEmpty() == false) {
            let [r,c] = queue.dequeue()
            for(let d of dir) {
                let x = d[0] + r
                let y = d[1] + c
                if(x < 0 || x >= m || y < 0 || y >= n) {
                    continue
                }
                if(grid[x][y] == 1) {
                    grid[x][y] = 2
                    temp.enqueue([x,y])
                }
                
            }
        }
        queue = temp
        time++
    }
    
    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            if(grid[r][c] == 1) {
                return -1
            }
        }
    }
    return time > 0 ? time - 1 : 0
};
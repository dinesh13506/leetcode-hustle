/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    let time = -1
    let m = grid.length, n = grid[0].length
    let queue = new Queue()
    let fresh = 0
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] == 2) {
                queue.enqueue([i,j])
            } else if(grid[i][j] == 1) {
                fresh++
            }
        }
    }
    
    if(fresh == 0 && queue.isEmpty()) {
        return 0
    }
    
    let dirs = [
        [-1,0],
        [1,0],
        [0,1],
        [0,-1]
    ]
    while(queue.isEmpty() == false) {
        time++
        let temp = new Queue()
        while(queue.isEmpty() == false) {
            let node = queue.dequeue()
            for(let dir of dirs) {
                let x = node[0] + dir[0], y = node[1] + dir[1]
                if(x < 0 || x >=m || y <0 || y>= n) {
                    continue
                }
                if(grid[x][y] == 1) {
                    grid[x][y] = 2
                    fresh--
                    temp.enqueue([x,y])
                }
            }
        }
        queue = temp 
    }
    
    return fresh == 0 ? time : -1
};
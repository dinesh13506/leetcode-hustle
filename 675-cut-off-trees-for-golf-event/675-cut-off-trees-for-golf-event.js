/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
    
    const m = forest.length, n = forest[0].length
    
    let trees = []
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(forest[i][j] > 1) {
                trees.push([i, j , forest[i][j]])
            }
        }
    }
    
    trees.sort((t1, t2) => {
        return t1[2] - t2[2]
    })
    
    //console.log(trees)
    
    let bfs = (startx, starty, endx, endy) => {
        const dir = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]
        
        let visited = new Array(m)
        for(let i = 0; i < m; i++) {
            visited[i] = new Array(n)
            visited[i].fill(false)
        }
        
        
        let queue = new Queue()
        queue.enqueue([startx, starty, 0])
        visited[startx][starty] = true
        
        while(!queue.isEmpty()) {
            let [x,y, steps] = queue.dequeue()
            if(x == endx && y == endy) {
                return steps
            }
            for(let d of dir) {
                let newx = x + d[0]
                let newy = y + d[1]
                
                if(newx < 0 || newy < 0 || newx>= m || newy >= n) {
                    continue
                }
                if(visited[newx][newy] == true) {
                    continue
                }
                if(forest[newx][newy] == 0) {
                    continue
                }
                visited[newx][newy] = true
                queue.enqueue([newx, newy, steps + 1])
            }
        }
        return -1
    }
    
    let total = 0
    let startx = 0, starty = 0
    let endx = 0, endy = 0
    for(let tree of trees) {
        endx = tree[0]
        endy = tree[1]
        let ans = bfs(startx, starty, endx, endy)
        if(ans == -1) {
            console.log(startx, starty, endx, endy)
            return -1
        } else {
            forest[endx][endy] = 1
            total += ans
            startx = endx
            starty = endy
        }
    }
    return total
};
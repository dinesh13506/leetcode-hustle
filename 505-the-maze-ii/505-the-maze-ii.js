/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function(maze, start, destination) {
    
    const directions = [
        [-1,0],
        [1,0],
        [0,1],
        [0,-1]
    ];
    const m = maze.length;
    const n = maze[0].length;
    let distance = new Array(m);
    for(let i = 0; i < m; i++) {
        distance[i] = new Array(n);
        distance[i].fill(Infinity);
    }
    
    distance[start[0]][start[1]] = 0;
    let queue = new Queue();
    queue.enqueue([start[0], start[1]]);
    while(queue.isEmpty() == false) {
        
        let [x,y] = queue.dequeue();
        for(let direction of directions) {
            let a = x;
            let b = y;
            let count = 0
            while(true) {
                let newx = a + direction[0];
                let newy = b + direction[1];
                if(newx < 0 || newy < 0 || newx>=m || newy >= n) {
                    break
                }
                if(maze[newx][newy] == 1) {
                    break
                }
                a = newx;
                b = newy;
                count++
            }
            if(distance[x][y] + count < distance[a][b]) {
                distance[a][b] = distance[x][y] + count
                queue.enqueue([a,b])
            }
        }
    }
    
    if(distance[destination[0]][destination[1]] == Infinity) return -1
    return distance[destination[0]][destination[1]]
};
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    
    const m = grid.length;
    const n = grid[0].length;
    let memo = new Array(n);
    for(let i = 0; i < m; i++) {
        memo[i]  = new Array(n);
        memo[i].fill(null);
    }
    let f = (i, j) => {
        //console.log(i,j);
        // if(i < 0 || i >= m || j < 0 || j >= n) {
        //     return -1;
        // }
        if(i >= m) {
            return j;
        }
        if(memo[i][j] != null) return memo[i][j];
        let value = grid[i][j];
        if(value == -1 && j - 1 < 0) {
            memo[i][j] = -1;
            return memo[i][j];
        }
        if(value == 1 && j + 1 >= n) {
            memo[i][j] = -1;
            return memo[i][j];
        }
        if(value == -1 && grid[i][j-1] == 1) {
            memo[i][j] = -1;
            return memo[i][j];
        }
        if(value == 1 && grid[i][j+1] == -1) {
            memo[i][j] = -1;
            return memo[i][j];
        }
        
        if(value == -1 && grid[i][j-1] == -1) {
            memo[i][j] = f(i + 1, j - 1);
            return memo[i][j];
        }
        if(value == 1 && grid[i][j+1] == 1) {
            memo[i][j] = f(i + 1, j + 1);
            return memo[i][j];
        }
    }
    
    let ans = [];
    for(let j = 0 ;j <n; j++) {
        ans.push(f(0, j));
    }
    //console.log(f(0,0));
    return ans;
    
};
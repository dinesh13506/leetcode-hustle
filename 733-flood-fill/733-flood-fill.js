/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    
    let m = image.length, n = image[0].length
    
    
    let sameColor = image[sr][sc]
    
    let dfs = function(i,j) {
        
        if(i < 0 || i >= m || j < 0 || j >= n) {
            return
        }
        if(image[i][j] != sameColor || image[i][j] == newColor) {
            return
        }
        image[i][j] = newColor
        dfs(i+1,j)
        dfs(i, j+1)
        dfs(i-1, j)
        dfs(i, j-1)
    }
    
    dfs(sr,sc)
    return image
};
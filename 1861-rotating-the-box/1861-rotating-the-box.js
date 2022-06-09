/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    
    let m = box.length
    let n = box[0].length
    
    let output = new Array(n)
    for(let i = 0; i < n; i++) {
        output[i] = new Array(m)
        output[i].fill('.')
    }
    
    for(let i = 0; i < m; i++) {
        let count = 0
        for(let j = 0; j < n; j++) {
            if(box[i][j] == '#') {
                count++
            } else if(box[i][j] == '*') {
                
                let row = j
                let col = m - i - 1
                output[row][col] = '*'
                row--
                while(row >= 0 && count > 0) {
                    //console.log(row,col)
                    output[row][col] = '#'
                    row--
                    count--
                }
            }
        }
        if(count > 0) {
            let col = m - i - 1
            let row = n-1
            while(row >=0 && count > 0) {
                output[row][col] = '#'
                row--
                count--
            }
        }
    }
    return output
};
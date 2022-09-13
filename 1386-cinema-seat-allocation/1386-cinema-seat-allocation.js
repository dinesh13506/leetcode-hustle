/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    let map = new Map()
    for(let rs of reservedSeats) {
        let row = rs[0]
        let col = rs[1]
        if(map.has(row)) {
            map.get(row).add(col)
        } else {
            map.set(row, new Set())
            map.get(row).add(col)
        }
    }
    //console.log(map, map.size)
    let emptyrows = n - map.size
    let ans = emptyrows * 2
    
    
    for(let rs of map.keys()) {
        let col = map.get(rs)
        let count = 2
        for(let i=2; i <=9; i++) {
            if(col.has(i)) {
                count = 0
                break
            }
        }
        if(count == 2) {
            //console.log("hey")
            ans = ans + 2
        } else {
            count = 1
            for(let i=4; i <=7; i++) {
                if(col.has(i)) {
                    count = 0
                    break
                }
            }
            if(count) {
                ans = ans + count
            }
            else {
               count = 1
                for(let i=2; i <=5; i++) {
                    if(col.has(i)) {
                        count = 0
                        break
                    }
                }
                if(count) {
                    ans = ans + count
                } else {
                    count = 1
                    for(let i=6; i <=9; i++) {
                        if(col.has(i)) {
                            count = 0
                            break
                        }
                    }
                    if(count) {
                        ans = ans + count
                    }
                }
            }
        }
        //console.log(ans)
    }
    return ans
};
/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    
    let convertToBin = (num) => {
        let temp = []
        while(num) {
            temp.push(num%2)
            num = parseInt(num/2)
        }
        while(temp.length < 8) {
            temp.push(0)
        }
        return temp.reverse().join("")
    }
    
    let arr = []
    for(let num of data) {
        arr.push(convertToBin(num))
    }
    let i = 0
    const one = '1', zero = '0'
    while(i < arr.length) {
        let curr = arr[i]
        let flag = false
        if(curr[0] == one && curr[1] == one && curr[2] == one && curr[3] == one && curr[4] == zero) {
            if(i + 3 < arr.length) {
                let next2 = arr[i+1]
                let next3 = arr[i+2]
                let next4 = arr[i+3]
                if(next2[0] == one && next2[1] == zero 
                   && next3[0] == one && next3[1] == zero
                   && next4[0] == one  && next4[1] == zero) {
                    flag = true
                    i = i + 4
                }
            }
        }
        else if(curr[0] == one && curr[1] == one && curr[2] == one && curr[3] == zero) {
            if(i + 2 < arr.length) {
                let next2 = arr[i+1]
                let next3 = arr[i+2]
                if(next2[0] == one && next2[1] == zero 
                   && next3[0] == one && next3[1] == zero) {
                    flag = true
                    i = i + 3
                }
            }
        }
        else if(curr[0] == one && curr[1] == one && curr[2] == 0) {
            if(i + 1 < arr.length) {
                let next2 = arr[i+1]
                if(next2[0] == one && next2[1] == zero) {
                    flag = true
                    i = i + 2
                }
            }
        }
        else if(curr[0] == 0) {
            flag = true
            i = i + 1
        }
        if(flag == false) {
            return false
        }
    }
    return true
};
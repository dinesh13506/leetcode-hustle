/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    
    let getcount = (num) => {
        let count = new Array(10)
        count.fill(0)
        while(num) {
            let digit = num % 10
            count[digit]++
            num = parseInt(num/10)
        }
        return count
    }
    
    let isDigitsEqual = (count1, count2) => {
        for(let i = 0; i < 10; i++) {
            if(count1[i] != count2[i]) return false
        }
        return true
    }
    
    let count = getcount(n)
    for(let i = 0; i < 31; i++) {
        let val = 1 << i
        let count1 = getcount(val)
        if(isDigitsEqual(count, count1)) return true
    }
    return false
};
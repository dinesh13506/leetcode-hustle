/**
 * @param {string} num
 * @return {boolean}
 */
 var isStrobogrammatic = function(num) {
    
    let rotatedDigits = {
        '0' : '0',
        '1' : '1',
        '6' : '9',
        '8' : '8',
        '9' : '6'
    }
    
    let i = 0 
    let j = num.length-1
    while(i<=j) {
        
        let leftChar = num[i]
        let rightChar = num[j]
        
        if(rotatedDigits[leftChar] != rightChar) {
            return false
        }
        i++
        j--
        
    }
    return true
};
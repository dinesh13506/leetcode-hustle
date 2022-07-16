/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    
    let total = (high - low) + 1
    
    let isEven = (num) => {
        return num % 2 == 0
    }
    
    let isOdd = (num) => {
        return num % 2 != 0
    }
    
    if(isEven(low) && isOdd(high)) {
        return total / 2
    }
    
    if(isOdd(low) && isEven(high)) {
        return total / 2
    }
    
    if(isEven(low) && isEven(high)) {
        return parseInt(total/2)
    }
    
    return parseInt(total/2) + 1
    
};
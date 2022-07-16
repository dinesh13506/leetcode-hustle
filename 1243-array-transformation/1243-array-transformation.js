/**
 * @param {number[]} arr
 * @return {number[]}
 */
var transformArray = function(input) {
    
    
    while(true) {
        let arr = input.slice()
        let change = false
        for(let i =1 ; i < arr.length -1; i++) {
            let prev = input[i-1],curr = input[i], next = input[i+1]
            if( (curr < prev && curr < next) ) {
                change = true
                arr[i]++
            }
            if(curr > prev && curr > next) {
                change = true
                arr[i]--
            }
        }
        
        if(change == false) return arr
        input = arr.slice()
    }
    return input
};
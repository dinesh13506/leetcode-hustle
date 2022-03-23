/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
 var findKthBit = function(n, k) {
    
    let invertAndReverse = function(s) {
        let result = []
        for(let i = 0; i< s.length; i++) {
            s[i] == '0' ? result.push(1) : result.push(0)
        }
        return result.reverse().join("")
    }
    
    let generate = function(i) {
        if( i == 1) {
            return "0"
        }
        let value = generate(i-1) 
        return value + "1" + invertAndReverse(value)
    }
    return generate(n)[k-1]
    
};
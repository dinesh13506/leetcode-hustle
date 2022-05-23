/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    
    let n = s.length
    
    let ispalindrome = function(i,j) {
        while(i <=j) {
            if(s[i] != s[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
    let result = []
    let dp = function(i,partition) {
        
        if(i == n) {
            result.push(partition.slice())
            return 
        }
        
        for(let j = i ; j < n; j++) {
            if(ispalindrome(i,j)) {
                let temp = []
                for(let p = i; p <= j; p++) {
                    temp.push(s[p])
                }
                partition.push(temp.join(''))
                dp(j+1,partition)
                partition.pop()
            }
        }
    }
    
    dp(0,[])
    return result
};
// solution 1 using recursion

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString1 = function(s) {
    
    let reverse = function(i,j) {
        if(i > j) {
            return
        }
        if(i === j) {
            return 
        }
        
        [s[i],s[j]] = [s[j],s[i]]
        reverse(i+1,j-1)
    }
    let i = 0
    let j = s.length - 1
    reverse(i,j)
    return s
};


//without recursion

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let i = 0
    let j = s.length - 1
    while(i < j) {
        [s[i],s[j]] = [s[j],s[i]]
        i++
        j--
    }
    return s
};

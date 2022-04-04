/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
    
    let arr1 = s1.split('')
    let arr2 = s2.split('')
    arr1.sort(function(a,b) { return a.charCodeAt() - b.charCodeAt()  })
    arr2.sort(function(a,b) { return a.charCodeAt() - b.charCodeAt()  })
    let len = arr1.length, i = 0
    let res1 = true,res2 = true
    while(i<len) {
        if(arr1[i] < arr2[i]) {
            res1 = false
            break
        }
        i++
    }
    i = 0
    while(i<len) {
        if(arr2[i] < arr1[i]) {
            res2 = false
            break
        }
        i++
    }
    
    return res1 || res2
};
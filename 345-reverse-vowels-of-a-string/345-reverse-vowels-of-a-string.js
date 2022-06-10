/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    let vowels = ['a','e','i','o','u']
    let idx = []
    let i = 0
    for(let ch of s) {
        if(vowels.includes(ch.toLowerCase())) {
            idx.push(i)
        }
        i++
    }
    //console.log(idx)
    let arr = s.split('')
    i = 0, j = idx.length -1
    while(i <= j) {
        let temp = arr[idx[i]]
        arr[idx[i]] = arr[idx[j]]
        arr[idx[j]] = temp
        i++
        j--
    }
    return arr.join('')
};
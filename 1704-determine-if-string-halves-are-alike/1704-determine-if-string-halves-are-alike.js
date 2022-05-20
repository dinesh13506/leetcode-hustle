/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    
    let vowels = ['a','e','i','o','u','A', 'E', 'I', 'O', 'U']
    let set = new Set(vowels)
    let i = 0, j = s.length-1
    let count1 = 0, count2 = 0
    while(i < j) {
        let cha = s[i], chb = s[j]
        if(set.has(cha)) {
            count1++
        }
        if(set.has(chb)) {
            count2++
        }
        i++
        j--
    }
    return count1 == count2
};
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    
    let vowels = ['a','e','i','o','u','A', 'E', 'I', 'O', 'U']
    let mapa = new Map()
    let mapb = new Map()
    let i = 0, j = s.length-1
    while(i < j) {
        let cha = s[i], chb = s[j]
        mapa.set(cha, (mapa.get(cha) || 0 ) + 1)
        mapb.set(chb, (mapb.get(chb) || 0 ) + 1)
        i++
        j--
    }
    let count1 = 0, count2 = 0
    for(let v of vowels) {
        count1 = count1 + (mapa.get(v) || 0)
        count2 = count2 + (mapb.get(v) || 0)
    }
    return count1 == count2
};
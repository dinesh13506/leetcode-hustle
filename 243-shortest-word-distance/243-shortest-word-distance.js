/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    
    let map = new Map()
    for(let i = 0; i < wordsDict.length; i++) {
        let word = wordsDict[i]
        let indexArr = map.get(word) || []
        indexArr.push(i)
        map.set(word,indexArr)
    }
    //console.log(map)
    let arr1 = map.get(word1)
    let arr2 = map.get(word2)
    let distance = Infinity
    for(let i of arr1) {
        for(let j of arr2) {
            distance = Math.min(distance, Math.abs(i-j))
        }
    }
    return distance
};
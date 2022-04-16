/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.indexMap = new Map()
    for(let i = 0; i < wordsDict.length; i++) {
        if(this.indexMap.has(wordsDict[i])) {
            let indexList = this.indexMap.get(wordsDict[i])
            indexList.push(i)
            this.indexMap.set(wordsDict[i],indexList)
        } else {
            let indexList = []
            indexList.push(i)
            this.indexMap.set(wordsDict[i],indexList)
        }
    }
    //console.log(this.indexMap)
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    let list1 = this.indexMap.get(word1), list2 = this.indexMap.get(word2)
    let d = Infinity
    for(let i of list1) {
        for(let j of list2) {
            d = Math.min(d, Math.abs(i-j))
        }
    }
    return d
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */
/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function(text, words) {
    
    let len = text.length
    words.sort(function(a,b) { return a.localeCompare(b)})
    let binarysearch = function(start,end,target) {
        while(start <= end) {
            let mid = parseInt((start+end)/2)
            if(words[mid] === target) {
                return true
            } else if(target.localeCompare(words[mid]) < 0) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        return false
    }
    let getsubstring = function(i,j) {
        let str = []
        while(i<=j) {
            str.push(text[i])
            i++
        }
        return str.join('')
        
    }
    let answer = []
    for(let i = 0; i < len ; i++) {
        for(let j = i; j < len; j++) {
            let str = getsubstring(i,j)
            if(binarysearch(0,words.length-1,str)) {
                answer.push([i,j])
            }
        }
    }
    return answer
};
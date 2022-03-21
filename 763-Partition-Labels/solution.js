/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
    
    let result = new Array()
    let lastIndexMap = new Map()
    let length = s.length
    for(let i = 0; i < length; i++) {
        lastIndexMap.set(s[i],i)
    }
    let start = 0
    let end = lastIndexMap.get(s[start])
    for(let i = 0; i < length; i++) {
        if(i === end) {
            let partitionLength = ( end - start + 1)
            result.push(partitionLength)
            start = i + 1
            end = lastIndexMap.get(s[start])
        }
        end = Math.max(end, lastIndexMap.get(s[i]))
    }
    return result
};
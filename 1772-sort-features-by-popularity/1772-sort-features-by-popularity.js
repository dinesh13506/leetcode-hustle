/**
 * @param {string[]} features
 * @param {string[]} responses
 * @return {string[]}
 */
var sortFeatures = function(features, responses) {
    
    let featureSet = new Set()
    let countmap = new Map()
    for(let feature of features) {
        featureSet.add(feature)
        countmap.set(feature, 0)
    }
    for(let response of responses) {
        let arr = response.split(" ")
        let responseSet = new Set()
        for(let f of arr) {
            if(featureSet.has(f) && !responseSet.has(f)){
                countmap.set(f,(countmap.get(f) || 0) + 1)
                responseSet.add(f)
            }
        }
    }
    let keys = countmap.keys()
    let result = []
    for(let key of keys) {
        result.push(key)
    }
    //console.log(result)
    result.sort(function(a,b) {
        if(countmap.get(a) === countmap.get(b)) {
            return 0
        }
        return countmap.get(b) - countmap.get(a)
    })
    return result
};
/**
 * @param {string[]} logs
 * @return {string[]}
 */
 var reorderLogFiles = function(logs) {
    
    let digitLogs = []
    let letterLogs = []
    for(let log of logs) {
        let first = log.split(" ")[1]
        if(isNaN(parseInt(first))) {
            letterLogs.push(log)
        } else {
            digitLogs.push(log)
        }
    }
    
    //console.log(digitLogs,letterLogs)
    letterLogs.sort(function(log1,log2) {
        let arr1 = log1.split(" ")
        let arr2 = log2.split(" ")
        let id1 = arr1[0]
        let id2 = arr2[0]
        let content1 = ""
        for(let i =1 ; i < arr1.length; i++) {
            content1 = content1 +arr1[i] + " "
        }
        let content2 = ""
        for(let i =1 ; i < arr2.length; i++) {
            content2 = content2 +arr2[i] + " "
        }
        let c = content1.localeCompare(content2)
        if(c === 0) {
            return id1.localeCompare(id2)
        }
        return c
    })
    //console.log(letterLogs)
    for(let dl of digitLogs) {
        letterLogs.push(dl)
    }
    return letterLogs
    
};
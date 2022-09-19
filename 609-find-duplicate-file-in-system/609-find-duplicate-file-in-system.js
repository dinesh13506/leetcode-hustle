/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    
    let map = new Map()
    for(let path of paths) {
        let str1 =  path.split(" ")
        let rootFolder = str1[0]
        //console.log("rootFolder => ", rootFolder)
        for(let i = 1; i < str1.length; i++) {
            let str2 = str1[i].split("(")
            let fileName = str2[0]
            let content = str2[1].split(")")[0]
            //console.log(fileName, content)
            
            let fullPath = rootFolder + "/" + fileName
            if(map.has(content)) {
                map.get(content).push(fullPath)
            } else {
                map.set(content, [])
                map.get(content).push(fullPath)
            } 
        }
    }
    
    //console.log(map)
    let ans = []
    for(let key of map.keys()) {
        if(map.get(key).length >= 2) {
            ans.push(map.get(key))
        }
        
    }
    return ans
};

var FileSystem = function() {
    this.map = new Map()
};

/** 
 * @param {string} path 
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function(path, value) {
    
    let len = 0
    let getParentPath = function(path) {
        for(let i = path.length-1; i >=0; i--) {
            if(path[i] == '/') {
                len = i
                break
            }
        }
        return path.substring(0,len)
    }
    
    let parentPath = getParentPath(path)
    //console.log("parentPath = " + parentPath)
    if(parentPath && parentPath.length) {
       if(!this.map.has(parentPath)) {
            return false
        } 
    }
    if(this.map.has(path)) {
        return false
    }
    this.map.set(path,value)
    return true
};

/** 
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function(path) {
    return this.map.get(path) || -1
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */
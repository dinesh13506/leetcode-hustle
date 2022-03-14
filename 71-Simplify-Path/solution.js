/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    
    let components = path.split("/")
    let stack = []
    let result = ""
    
    for( let component of components ) {
        if(component === ""  || component === ".") {
            continue
        }
        if(component === "..") {
            if(stack.length) {
                stack.pop()
            }
        } else {
            stack.push(component)
        }
    }
    
    for(let i = 0; i < stack.length; i++) {
        result += "/"
        result += stack[i]
    }
    return result.length > 0 ? result : "/"
};
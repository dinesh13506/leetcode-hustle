/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    
    let components = path.split("/")
    let stack = []
    
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
    return stack.length > 0 ? ("/" + stack.join("/") ) : "/"
};
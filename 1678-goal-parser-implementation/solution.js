/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    
    const open = '('
    const close = ')'
    let length = command.length
    
    let result = []
    for( let i = 0; i < length;) {
        let ch = command[i]
        if( ch === 'G') {
            result.push(ch)
            i++
        } else if(ch == open && command[i+1] === close) {
            result.push('o')
            i = i + 2
        } else {
            result.push("al")
            i = i + 4
        }
    }
    return result.join("")
};
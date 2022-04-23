/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    
    let map = {}
    let res = 0
    for( let email of emails ) {
        let inputs = email.split('@')
        let localName = getLocalName( inputs[0] )
        let domainName = inputs[1]
        let address = localName +'@'+ domainName
        if( !map[address]) {
            map[address] = 1
            res++
        }
    }
    return res
};


function getLocalName( input ) {
    let output = ""
    for( let ch of input ) {
        if( ch == '+') {
            break
        }
        else if( ch == '.') {
            
        }
        else {
            output += ch
        }
    }
    
    return output
    
}
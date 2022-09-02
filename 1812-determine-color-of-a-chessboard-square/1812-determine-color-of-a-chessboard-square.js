/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let x = coordinates[0].charCodeAt() - 97 + 1
    let y = parseInt(coordinates[1])
    //console.log(x,y)
    if( (x % 2 != 0) && (y % 2 != 0)) {
        return false
    }
    else if( (x % 2 == 0) && (y % 2 == 0)) {
        return false
    }
    return true
    
};
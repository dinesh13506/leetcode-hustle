/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let words = title.split(" ")
    let result = []
    let toLower = function(ch) {
        if(ch >= 'A' && ch <= 'Z')
            return String.fromCharCode(ch.charCodeAt() - 65  + 97)
        else return ch
    }
    let toUpper = function(ch) {
        if(ch >= 'a' && ch <= 'z')
            return String.fromCharCode(ch.charCodeAt() - 97 + 65)
        else return ch
    }
    for(let word of words) {
        let arr = word.split('')
        for(let i = 0 ; i < arr.length; i++) {
           if(arr.length == 1 || arr.length == 2) {
               arr[i] = toLower(arr[i])
               continue
           }
           if(i == 0) {
               arr[i] = toUpper(arr[i])
           } else {
               arr[i] = toLower(arr[i])
           }
        }
        result.push(arr.join(''))
    }
    return result.join(" ")
};
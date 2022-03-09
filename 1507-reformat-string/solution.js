/**
 * @param {string} date
 * @return {string}
 */
 var reformatDate = function(date) {
    let monthMap = {"Jan" : "01", "Feb" :"02", "Mar":"03", "Apr":"04", "May":"05", "Jun":"06", "Jul":"07", "Aug":"08", "Sep":"09", "Oct":"10", "Nov":"11", "Dec":"12"}
    
    let arr = date.split(" ")
    let year = arr[2]
    let month = monthMap[arr[1]]
    let day = ""
    for( let ch of arr[0]) {
        if(ch>='0' && ch<='9') {
             day+=ch
        }
    } 
    let output = `${year}-${month}-${day.length==1 ? "0"+day : day}`
    return output
};
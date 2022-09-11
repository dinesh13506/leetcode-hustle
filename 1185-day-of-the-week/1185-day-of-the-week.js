/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    
    let isLeapYear = (year) => {
       return year % 4 == 0 && year % 100 != 0 || year % 400 == 0
    }
    
    let daysInMonth = (month, year) => {
        if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            return 31
        } 
        else if(month == 2) {
           return isLeapYear(year) ? 29 : 28
        }
        return 30
    }
    
    let days = 0
    for(let y = 1971; y < year; y++) {
        days += (isLeapYear(y) ? 366 : 365)
    }
    
    for(let m = 1; m < month; m++) {
        days += daysInMonth(m, year)
    }
    
    days += day
    
    let names = [
        "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday","Wednesday"
    ]
    
    return names[ days % 7]
};
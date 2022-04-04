/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort(function(a,b) { return a - b })
    let sum = 0, n = salary.length - 2
    for(let i = 1; i < salary.length - 1; i++) {
        sum = sum + salary[i]
    }
    return sum / n
};
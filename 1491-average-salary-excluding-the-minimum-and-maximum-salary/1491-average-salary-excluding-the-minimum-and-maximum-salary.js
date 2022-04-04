/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = Infinity
    let max = -Infinity
    for(let x of salary) {
        min = Math.min(x,min)
        max = Math.max(x,max)
    }
    let sum = 0, n = salary.length - 2
    for(let x of salary) {
        if(x != min && x != max) {
            sum = sum + x
        }
    }
    return sum / n
};
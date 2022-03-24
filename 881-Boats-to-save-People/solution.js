/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {
    let boats = 0
    people.sort(function(weightA,weightB) { return weightB - weightA})
    let i = 0
    let j = people.length-1
    while(i<=j) {
        let weightA = people[i]
        let weightB = people[j]
        if(weightA + weightB <= limit) {
            boats++
            i++
            j--
        } else if(weightA <= limit) {
            boats++
            i++
        }
    }
    return boats
};
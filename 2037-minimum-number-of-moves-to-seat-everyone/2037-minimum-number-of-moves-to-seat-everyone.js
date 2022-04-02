/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    
    seats.sort(function(a,b) { return a - b})
    students.sort(function(a,b) { return a - b})
    let moves = 0
    for(let i = 0; i < seats.length; i++) {
        moves = moves + Math.abs(seats[i]- students[i])
    }
    return moves
};

//Time Complexity : O(n)
//Space Complexity :O(1)
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    
    let n = rating.length
    let teams = 0
    for(let i = 0; i < n; i++) {
        //check on left
        let smaller_on_left = 0, larger_on_left = 0
        for(let j = 0; j < i; j++) {
            if(rating[j] < rating[i]) smaller_on_left++
            else larger_on_left++
        }
        
        //
        let smaller_on_right = 0, larger_on_right = 0
        for(let j = i + 1; j < n; j++) {
            if(rating[j] < rating[i]) smaller_on_right++
            else larger_on_right++
        }
        
        teams = teams + (smaller_on_left * larger_on_right)
        teams = teams + (larger_on_left * smaller_on_right)
    }
    return teams
};
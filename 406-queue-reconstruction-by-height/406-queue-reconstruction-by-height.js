/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    
    people.sort((p1,p2) => {
        if(p1[0] == p2[0]) {
            if(p1[1] < p2[1]) {
                return -1
            } else if(p1[1] > p2[1]) {
                return 1
            }
            return 0
        } else {
            if(p1[0] < p2[0]) {
                return 1
            } else if(p1[0] > p2[0]) {
                return -1
            }
            return 0
        }
        
    })
    let answer = []
    for(let p of people) {
        answer.splice(p[1],0, p)
    }
    return answer
};
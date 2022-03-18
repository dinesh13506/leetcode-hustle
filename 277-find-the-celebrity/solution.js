/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
 var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    
    function isceleb(person,n) {
        for(let p = 0; p < n; p++) {
            if(p === person) continue
            
            if(knows(person,p) === true) return false
            if(knows(p,person) === false) return false  
        }
        return true
    }
    return function(n) {
        let candidate = 0
        for(let p = 1; p < n; p++) {
             if(knows(p,candidate) === false) {
                 candidate = p
             }
        }
        if(isceleb(candidate,n)) {
            return candidate
        }
        return -1
    };
};
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
    let map = new Map()
    
    
    let knowsWithCache = function(A,B) {
        let key = `${A},${B}`
        if(map.has(key)) {
            return map.get(key)
        } else {
            let value = knows(A,B)
            map.set(key,value)
            return value
        }
    }
    
    function isceleb(person,n) {
        for(let p = 0; p < n; p++) {
            if(p === person) continue
            
            if(knowsWithCache(person,p) === true) return false
            if(knowsWithCache(p,person) === false) return false  
        }
        return true
    }
    return function(n) {
        let candidate = 0
        for(let p = 1; p < n; p++) {
             if(knowsWithCache(p,candidate) === false) {
                 candidate = p
             }
        }
        if(isceleb(candidate,n)) {
            return candidate
        }
        return -1
    };
};
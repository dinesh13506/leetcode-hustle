/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    
    let bs = function(start, end) {
        let ans = 0
        while(start <= end) {
            let mid = start + parseInt((end-start)/2)
            if(letters[mid] == target) {
                start = mid + 1
            }
            else if(target < letters[mid]) {
                ans = mid
                end = mid -1
            } else if(target > letters[mid]) {
                start = mid + 1
            }
        }
        return letters[ans]
    }
    return bs(0, letters.length -1)
};
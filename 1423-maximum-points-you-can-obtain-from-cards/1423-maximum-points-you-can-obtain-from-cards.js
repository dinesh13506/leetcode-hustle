/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    
    let windowsize = cardPoints.length - k // min sum window - TBD
    
    let sum = 0
    for(let i = 0; i < windowsize; i++) {
        sum = sum + cardPoints[i]
    }
    
    let left = 0, minsum = sum
    for(let right = windowsize; right < cardPoints.length; right++) {
        sum = sum + cardPoints[right] - cardPoints[left]
        left++
        minsum = Math.min(sum, minsum)
        
    }
    
    let totalsum = 0
    for(let cp of cardPoints) {
        totalsum += cp
    }
    
    return totalsum - minsum
};
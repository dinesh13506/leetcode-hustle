/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    
    let windowsize = cardPoints.length - k // find subarray of length windowsize with min sum
    let totalsum = 0
    let sum = 0
    for(let i = 0; i < windowsize; i++) {
        sum = sum + cardPoints[i]
        totalsum += cardPoints[i]
    }
    let left = 0, minsum = sum
    for(let right = windowsize; right < cardPoints.length; right++) {
        sum = sum + cardPoints[right] - cardPoints[left]
        left++
        minsum = Math.min(sum, minsum)
        totalsum += cardPoints[right]
    }
    return totalsum - minsum
};
/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    
    let suitMap = new Array(5)
    suitMap.fill(0)
    for(let suit of suits) {
        let i = suit.charCodeAt() - 'a'.charCodeAt()
        suitMap[i]++
    }
    for(let i = 0 ; i < 5; i++) {
        if(suitMap[i] == 5) {
            return "Flush"
        }
    }
    
    let rankMap =  new Array(14)
    rankMap.fill(0)
    
    for(let rank of ranks) {
        rankMap[rank]++
    }
    for(let i = 1 ; i < 14; i++) {
        if(rankMap[i] >= 3) {
            return "Three of a Kind"
        }
    }
    
    for(let i = 1 ; i < 14; i++) {
        if(rankMap[i] == 2) {
            return "Pair"
        }
    }
    
    for(let i = 1 ; i < 14; i++) {
        if(rankMap[i] == 1) {
            return "High Card"
        }
    }
    
    
    
};
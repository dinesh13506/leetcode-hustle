/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    
    let min_capacity = -Infinity;
    let max_capacity = 0;
    for(let w of weights) {
        max_capacity += w;
        if( min_capacity < w ) {
            min_capacity = w;
        }
    }
    
    //console.log(min_capacity, max_capacity);
    
    let ispossible = (capacity) => {
        let d = 1, sum = 0;
        for(let i = 0; i < weights.length ; i++) {
            let w = weights[i];
            if(sum + w > capacity) {
                d++;
                sum = 0;
            }
            sum = sum + w;
            //console.log("days = " , d, sum)
        }
        //console.log(capacity, d,d <= days);
        return d <= days ? true : false;
    }
    let ans = max_capacity;
    let low = min_capacity, high = max_capacity;
    
    while(low < high) {
        let mid = low + parseInt( (high - low) / 2 );
        if(ispossible(mid)) {
            ans = Math.min(ans, mid);
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return ans;
};
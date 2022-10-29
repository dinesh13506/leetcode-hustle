/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function(plantTime, growTime) {
    const n = plantTime.length;
    let input = [];
    for(let i = 0; i < n; i++) {
        input.push([
            plantTime[i], growTime[i]
        ]);
    }
    //console.log(input);
    input.sort((a,b) => {
            if(a[1] == b[1]) {
                return a[0] - b[0];
            } else if(a[0] == b[0]) {
                return b[1] - a[1];
            } else {
                return b[1] - a[1];
            }
    })
    let pt = 0;
    let ans = 0;
    for(let i = 0; i < n; i++) {
        pt += input[i][0];
        ans = Math.max(ans, pt + input[i][1]);
    }
    return ans;
};
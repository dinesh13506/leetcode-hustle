// { Driver Code Starts
//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let [N,W] =  readLine().trim().split(" ").map((x) => parseInt(x));
        let val =  readLine().trim().split(" ").map((x) => parseInt(x));
        let wt =  readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.knapSack(N,W,val,wt);
        if(res === -0)
            res = 0;
        console.log(res);
        
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @param {number} W
 * @param {number[]} val
 * @param {number[]} wt
 * @return {number}
*/

class Solution {

    knapSack(N,W,val,wt){
        //code here
        
        let memo = new Array(N)
        for(let i = 0; i < N; i++){
            memo[i] = new Array(W+1)
            memo[i].fill(-1)
        }
        let dp = function(index, W) {
            //console.log(index,W)
            if(index == 0) {
                return val[index] * parseInt( W / wt[index])
            }
            if(memo[index][W] != -1) {
                return memo[index][W]
            }
            let nottake = dp(index-1, W)
            let take = -Infinity
            if(wt[index] <= W) {
                take = val[index] + dp(index, W-wt[index])
            }
            //console.log("max ",Math.max(take,nottake))
            memo[index][W] =  Math.max(take,nottake)
            return memo[index][W]
        }
        
        let ans = dp(N-1, W)
        return ans != -Infinity ?  ans : 0
        
    }
}
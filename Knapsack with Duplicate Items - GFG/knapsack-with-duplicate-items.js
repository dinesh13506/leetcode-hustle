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
        
        let prev = new Array(W+1)
        prev.fill(0)
        
        
        for(let j = 0; j <= W; j++){
            prev[j] = (val[0]) * parseInt( j / wt[0])
        }
        
        for(let i = 1; i < N; i++){
             for(let j = 0; j <= W; j++){
                let nottake = prev[j]
                let take = 0
                if(wt[i] <= j) {
                    take = val[i] + prev[j-wt[i]]
                }
                prev[j] = Math.max(take,nottake)
            }
        }
        
        return prev[W]
        
    }
}
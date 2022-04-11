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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let W = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let val = new Array(n);
        for(let i=0;i<n;i++)
            val[i] = parseInt(input_line[i]);
        
        input_line = readLine().split(' ');
        let wt = new Array(n);
        for(let i=0;i<n;i++)
            wt[i] = parseInt(input_line[i]);
        
        
        let obj = new Solution();
        let ans = obj.knapSack(W, wt, val, n);
        if(ans==-0)
            ans=0;
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} W
 * @param {number[]} wt
 * @param {number[]} val
 * @param {number} n
 * @returns {number}
*/

class Solution 
{
    //Function to return max value that can be put in knapsack of capacity W.
    knapSack(W, wt, val, n)
    { 
       // code here
       let dp = new Array(n+1)
       for(let i = 0; i <=n ;i++) {
           dp[i] = new Array(W+1)
       }
       
       //if n == 0 , total number of items is zero, so max value we can get is 0
       for(let i = 0; i <= W; i++) {
           dp[0][i] = 0
       }
       //if W = 0 then doest not matter how many items we have we canoot pick
       for(let i = 0; i <= n; i++) {
           dp[i][0] = 0
       }
       
       for(let i = 1; i <= n; i++) {
           for(let j = 1; j <=W; j++) {
               if(wt[i-1] > j) {
                   dp[i][j] = dp[i-1][j]
               } else {
                   dp[i][j] = Math.max(val[i-1] + dp[i-1][j-wt[i-1]],dp[i-1][j])
               }
           }
       }
       
       return dp[n][W]
       
       
    }
}


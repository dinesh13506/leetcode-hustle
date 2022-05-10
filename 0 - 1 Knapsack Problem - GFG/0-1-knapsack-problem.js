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
       
       let prev = new Array(W+1)
       prev.fill(0)
       
       for(let j = 0; j <= W; j++) {
           if(wt[0] <= j) {
               prev[j] = val[0]
           } else {
               prev[j] = 0
           }
       }
       
       for(let i = 1; i < n; i++) {
           let curr = new Array(W+1)
           curr.fill(0)
           for(let j = 0; j <=W; j++) {
               let nottake = prev[j]
               let take = -Infinity
               if(wt[i] <= j) {
                   take = val[i] + prev[j-wt[i]]
               }
               curr[j] = Math.max(take, nottake)
           }
           prev = curr
       }
       return prev[W]
    }
}


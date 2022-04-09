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
        let x = parseInt(input_line[0]);
        let y = parseInt(input_line[1]);
        let z = parseInt(input_line[2]);
        
        
        let obj = new Solution();
        let ans = obj.maximizeTheCuts(n, x, y, z);
        if(ans==-0)
        ans=0;
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {number}
*/

class Solution
{
    //Function to find the maximum number of cuts.
    maximizeTheCuts(n, a, b, c)
    {
        // code here
        let dp = new Array(n+1)
        dp[0] = 0
        for(let i =1; i <=n ;i++) {
            dp[i] = -1
            if((i-a)>=0) {
                dp[i] = Math.max(dp[i],dp[i-a])
            }
            if((i-b)>=0) {
                dp[i] = Math.max(dp[i],dp[i-b])
            }
            if((i-c)>=0) {
                dp[i] = Math.max(dp[i],dp[i-c])
            }
            if(dp[i] !== -1) {
                dp[i]++
            }
        }
        return dp[n] > 0 ? dp[n] : 0
        
    }
}
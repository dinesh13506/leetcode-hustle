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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.matrixMultiplication(arr, n));
        
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    
    matrixMultiplicationMemo(arr, n)
    {
        //your code here
        let memo = new Array(n)
        for(let i = 0; i < n; i++) {
            memo[i] = new Array(n)
            memo[i].fill(-1)
        }
        let dp = function(i,j) {
            if(i == j) {
                return 0
            }
            
            if(memo[i][j] != -1) {
                return memo[i][j]
            }
            let ans = Infinity
            for(let k = i; k <= j-1; k++) {
                let steps = (arr[i-1] * arr[k] * arr[j]) + dp(i,k) + dp(k+1,j)
                ans = Math.min(steps, ans)
            }
            memo[i][j] = ans
            return memo[i][j]
        }
        return dp(1, n-1)
    }
    
    matrixMultiplication(arr, n)
    {
        //your code here
        let dp = new Array(n)
        for(let i = 0; i < n; i++) {
            dp[i] = new Array(n)
            dp[i].fill(0)
        }
        
        for(let i = n-1; i>=1; i--) {
            for(let j = i + 1; j < n; j++) {
                let ans = Infinity
                for(let k = i; k < j; k++) {
                    let steps = (arr[i-1] * arr[k] * arr[j]) + dp[i][k] + dp[k+1][j]
                    ans = Math.min(steps, ans)
                }
                dp[i][j] = ans
            }
        }
        return dp[1][n-1]
        
    }
    
}
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
        let [n,sum] = readLine().trim().split(" ").map((x) => parseInt(x));
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.perfectSum(arr,n,sum);
        if(res === -0)
            res = 0;
        console.log(res);
        
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} sum
 * @return {number}
*/

class Solution {

    perfectSum(arr,n,sum){
        //code here
        let mod = Math.pow(10,9) + 7
        let dp = new Array(n)
        for(let i = 0; i < n; i++) {
            dp[i] = new Array(sum+1)
            dp[i].fill(0)
        }
       
        for(let i = 0; i < n; i++) {
            if(arr[i] === 0)
                dp[i][0] = 2
            else 
                dp[i][0] = 1
        }
        
        for(let target = 1; target <= sum; target++) {
            if(arr[0] == target) {
                dp[0][target] = 1
            }
        }
        
        
        for(let i = 1; i < n ;i++) {
            for(let target = 0; target <= sum; target++) {
                let nottake = dp[i-1][target]%mod
                let take = 0
                if(arr[i] <= target) {
                    take = dp[i-1][target - arr[i]]%mod
                }
                dp[i][target] = (take + nottake)%mod
            }
        }
        return dp[n-1][sum]
        
        
        
    }
    
    
}
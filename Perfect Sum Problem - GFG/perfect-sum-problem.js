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
        let memo = new Array(n)
        for(let i = 0; i < n; i++) {
            memo[i] = new Array(sum+1)
            memo[i].fill(-1)
        }
        //console.log(memo)
        let dp = function(index, sum) {
            if(index < 0 ) return 0
            if(index === 0) {
                if(sum == 0 && arr[0] == 0) {
                    return 2
                }
                else if( sum === 0 || arr[index] === sum) {
                    return 1
                }
                return 0
            }
            if(memo[index][sum] != -1) return memo[index][sum]
            
            let nottake = dp(index-1, sum)
            let take = 0
            if(arr[index] <= sum) {
                take = dp(index-1, sum - arr[index])
            }
            memo[index][sum] =  ((take%mod) + (nottake%mod))%mod
            return memo[index][sum]
        }
        
        return dp(n-1,sum)
        
        
    }
    
    
}
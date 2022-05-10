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
        let prev = new Array(sum+1)
        prev.fill(0)
        for(let target = 0; target <= sum; target++) {
            if(target == 0) {
                if(arr[0] == 0) {
                    prev[0] = 2
                } else {
                    prev[0] = 1
                }
            }
            else if(arr[0] == target) {
                prev[target] = 1
            }
        }
        
        
        for(let i = 1; i < n ;i++) {
            let curr = new Array(sum+1)
            for(let target = 0; target <= sum; target++) {
                let nottake = prev[target]%mod
                let take = 0
                if(arr[i] <= target) {
                    take = prev[target - arr[i]]%mod
                }
                curr[target] = (take + nottake)%mod
            }
            prev = curr
        }
        return prev[sum]
    }
    
    
}
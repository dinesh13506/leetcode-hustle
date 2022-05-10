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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.minDifference(arr, n);
        console.log(res);
        
    }
}// } Driver Code Ends
// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution{
    minDifference(nums,n){
        let total = 0
        for(let num of nums) {
            total += num
        }
        let dp = new Array(n)
        for(let i = 0; i < n; i++) {
            dp[i] = new Array(total+1)
            dp[i].fill(0)
        }
        
        for(let i = 0; i < n; i++) {
            dp[i][0] = true
        }
        
        if(nums[0] <= total) {
            dp[0][nums[0]] = (nums[0] === total)
        }
        
        for(let i = 1; i < n; i++) {
            for(let target = 1; target <= total; target++) {
                let nottake = dp[i-1][target]
                let take = false
                if(nums[i] <= target) {
                    take = dp[i-1][target - nums[i]]
                }
                dp[i][target] = take || nottake
            }
        }
        
        let diff = Infinity
        for(let s1 = 0; s1 <= total; s1++) {
            if(dp[n-1][s1] === true) {
                //console.log(s1, total - s1,Math.abs(total-s1-s1))
                diff = Math.min(diff, Math.abs(total-s1-s1))
            }
        }
        return diff
    }
}



// { Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input1 = readLine().split(" ").map((x) => parseInt(x));
    let n = input1[0];
    let m = input1[1];
    let S1 = readLine();
    let S2 = readLine();
    let obj = new Solution();
    let res = obj.longestCommonSubstr(S1,S2,n,m);
    console.log(res);
  }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} S1
 * @param {string} S2
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

class Solution {
    longestCommonSubstr(S1,S2,n,m){
        //code here
        
        let dp = new Array(n+1)
        for(let i = 0; i <= n; i++) {
            dp[i] = new Array(m+1)
            dp[i].fill(0)
        }
        
        let ans = 0
        for(let i = 1; i <= n; i++) {
            for(let j =1 ; j <=m; j++) {
                let ch1 = S1[i-1]
                let ch2 = S2[j-1]
                if(ch1 === ch2) {
                    dp[i][j] = 1 + dp[i-1][j-1]
                    ans = Math.max(ans,dp[i][j])
                } else {
                    dp[i][j] = 0
                }
            }
        }

        return ans
        
        
    }
}
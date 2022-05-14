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

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let [str1, str2] = readLine().trim().split(" ");
    let obj = new Solution();
    let res = obj.minOperations(str1, str2);
    console.log(res);
  }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
class Solution {
  minOperations(str1, str2) {
    //code here
    let n1 = str1.length, n2 = str2.length
    let dp = new Array(n1+1)
    for(let i = 0; i <=n1; i++) {
        dp[i] = new Array(n2+1)
        dp[i].fill(0)
    }
    for(let i = 1; i <= n1; i++) {
        for(let j = 1; j <= n2; j++) {
            let ch1 = str1[i-1], ch2 = str2[j-1]
            if(ch1 === ch2) {
                dp[i][j] = 1 + dp[i-1][j-1]
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    let lcs = dp[n1][n2]
    let deletions = n1 - lcs
    let insertions = n2 - lcs
    return deletions + insertions
  }
}

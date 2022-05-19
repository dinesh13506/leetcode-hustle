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
    let n = parseInt(readLine());
    let nums = new Array(n);
    let inputArr = readLine().split(" ").map((x) => parseInt(x));
    for(let j = 0;j<n;j++) nums[j] = inputArr[j];
    let obj = new Solution();
    let res = obj.LongestBitonicSequence(nums);
    console.log(res);
  }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} nums
 * @return {number}
 */

class Solution {
    LongestBitonicSequence(nums){
        //code here
        let n = nums.length
        let dp1 = new Array(n)
        dp1.fill(1)
        let dp2 = new Array(n)
        dp2.fill(1)
        
        for(let i = 0; i < n; i++) {
            for(let prev = 0; prev < i; prev++) {
                if(nums[i] > nums[prev] && (dp1[i] < dp1[prev] + 1)) {
                    dp1[i] = dp1[prev] + 1
                }
            }
        }
        
        for(let i = n-1; i >=0; i--) {
            for(let prev = n-1; prev > i; prev--) {
                if(nums[i] > nums[prev] && (dp2[i] < dp2[prev] + 1)) {
                    dp2[i] = dp2[prev] + 1
                }
            }
        }
        
        
        let max = 0
        for(let i = 0; i < n; i++) {
            max = Math.max(max, dp1[i] + dp2[i] -1)
        }
        return max
    }
}
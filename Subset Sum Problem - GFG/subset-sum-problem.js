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
    let n = parseInt(readLine());
    let arr = new Array(n);
    let inputArr = readLine().split(" ").map((x) => parseInt(x));
    for(let j = 0;j<n;j++) arr[j] = inputArr[j];
    let sum = parseInt(readLine());
    let obj = new Solution();
    let res = obj.isSubsetSum(arr,n,sum);
    console.log(Number(res));
  }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} sum
 * @return {boolean}
 */

class Solution {
    isSubsetSum(arr,n,sum){
        let prev = new Array(sum+1)
        prev.fill(-1)
        for(let i = 0 ; i < n; i++) {
            prev[0] = true
        }
        for(let j = 1; j <= sum; j++) {
            prev[j] = ( j == arr[0])
        }
        
        for(let i = 1; i < n; i++) {
            let curr = new Array(sum+1)
            for(let j = 1; j <=sum; j++) {
                curr[j] = prev[j] || ( j >= arr[i] ? prev[j-arr[i]] : false)
            }
            prev = curr
        }
        
        return prev[sum] ? 1 : 0
    }
}
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
        let memo = new Array(n)
        for(let i =0 ; i < n; i++) {
            memo[i] = new Array(sum+1)
            memo[i].fill(-1)
        }
        //code here
        let dp = function(index, sum) {
            if(sum === 0) {
                return true
            }
            if(index === 0) {
                return sum == arr[0]
            }
            
            if(memo[index][sum] != -1) {
                return memo[index][sum]
            }
            
            let nottake = dp(index-1, sum)
            let take = false
            if(arr[index] <= sum) {
                take = dp(index-1, sum - arr[index])
            }
            memo[index][sum] =  take || nottake
            return memo[index][sum]
        }
        
        return dp(n-1, sum) === true ? 1 : 0
    }
}
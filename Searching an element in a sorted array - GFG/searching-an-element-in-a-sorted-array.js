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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let k = input_ar0[1];
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.searchInSorted(arr, n, k));
        
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @returns {number}
*/

class Solution {
    
    searchInSorted(arr, N, K)
    {
        //your code here
        let i = 0, j = arr.length -1
        while(i <= j) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        }
        
        //console.log(arr)
        
        let bs = function() {
            let start = 0 , end = arr.length -1
            while(start <= end) {
                let mid = start + parseInt((end-start)/2)
                if(arr[mid] == K) {
                    return mid
                } else if(K < arr[mid]) {
                    start = mid + 1
                } else {
                    end = mid -1
                }
            }
            return -1
        }
        return bs() >=0 ? 1 : -1
    }
}
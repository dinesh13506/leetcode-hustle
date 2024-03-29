//{ Driver Code Starts
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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let m = input_ar1[1];
        let mat = [];
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let k=0;
        for(let i=0;i<n;i++){
            let b = [];
            for(let j=0;j<m;j++){
                b.push(input_ar1[k++]);
            }
            mat.push(b);
        }
        let obj = new Solution();
        let res = obj.maxOnes(mat, n, m);
        console.log(res);
        
    }
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[][]} mat
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/

class Solution{
    maxOnes(mat, n, m){
        //code here
        

        
        let max = 0;
        let row = -1;
        for(let r = 0;  r < n; r++) {
            let count = 0;
            for(let c = 0; c < m; c++) {
                if(mat[r][c] == 1) {
                    count++;
                }
            }
            if(count > max) {
                max = count;
                row = r;
            }
        }
        return row;
    }
}


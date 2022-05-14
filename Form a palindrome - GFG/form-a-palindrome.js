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
        let str = readLine();
        let obj = new Solution();
        let res = obj.countMin(str);
        console.log(res);
        
    }
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript



/**
 * @param {string} str
 * @returns {number}
*/

class Solution{
    countMin(s){
        //code here
    let n = s.length
    let revs = s.split('').reverse().join('')
    let prev = new Array(n + 1)
    prev.fill(0)
    for(let i = 1; i <=n; i++) {
        let curr = new Array(n + 1)
        curr.fill(0)
        for(let j = 1; j <=n ; j++) {
            let ch1 = s[i-1], ch2 = revs[j-1]
            if(ch1 === ch2) {
                curr[j] = 1 + prev[j-1]
            } else {
                curr[j] = Math.max(prev[j],curr[j-1])
            }
        }
        prev = curr
    }
    
    return n - prev[n]
    }
}

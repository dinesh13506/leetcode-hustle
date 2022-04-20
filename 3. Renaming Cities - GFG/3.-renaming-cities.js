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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        let arr = new Array(n);
        for(let i=0;i<n;i++){
            input_line = readLine().split(' ');
            arr[i] = input_line[0];
        }
        
        let obj = new Solution();
        obj.check(arr, n);
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string[]} arr
 * @param {number} n
*/

class TrieNode {
    constructor() {
        this.children = new Array(26)
        this.children.fill(null)
        this.isEndOfWord = false
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode()
        this.map = new Map()
    }
    insert(key) {
        let prefix = [], isFirstNode = true
        let curr = this.root
        for(let ch of key) {
            let i = ch.charCodeAt() - 'a'.charCodeAt()
            //console.log(ch,i)
            if(curr.children[i] === null) {
                if(isFirstNode) {
                   prefix.push(ch)
                   isFirstNode = false
                }
                curr.children[i] = new TrieNode()
            } else {
                prefix.push(ch)
            }
            curr = curr.children[i]
        }
        curr.isEndOfWord = true
        return prefix.join('')
    }
}
class Solution 
{
    
    check(arr, n)
    {
        // code here
        let trie = new Trie()
        for(let key of arr) {
            if(trie.map.has(key)) {
                trie.map.set(key,trie.map.get(key) + 1)
                console.log(key +" " + trie.map.get(key))
            } else {
                let prefix = trie.insert(key)
                trie.map.set(key, 1)
                console.log(prefix)
            }
        }
    }
}

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

class TrieNode{
    constructor(){ 
        this.children = new Array(26);
        this.children.fill(null);
        // isEndOfWord is True if node represent the end of the word 
        this.isEndOfWord = false
    }
}  
class Trie{
      
    // Trie data structure class 
    constructor(){ 
        this.root =new TrieNode()
    }
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let q = parseInt(input_line[1]); 
        
        input_line = readLine().split(' ');
        let words = new Array(n);
        for(let i=0;i<n;i++)
            words[i] = input_line[i];
        
        let obj = new Solution();
        let t = new Trie();
        for(let i=0;i<n;i++)
        {
            obj.insert(t.root,words[i]);
        }
        
        let Queries = new Array(q);
        for(let i=0;i<q;i++)
        {
            input_line = readLine().split(' ');
            Queries[i] = input_line[0];
             let ans = obj.search(t.root, Queries[i]);
             if(ans)
                 ans=1;
             else
                 ans=0;
             console.log(ans);
        }
    }
}// } Driver Code Ends


//User function Template for javascript


/**
 * 
 * insert 
 * @param {TrieNode} root (root of trie tree)
 * @param {string} key (key to be inserted)
 * 
 * search
 * @param {TrieNode} root (root of trie tree)
 * @param {string} key (key to be searched)
 * @returns {boolean}  (true if key presents in trie, else false)
*/


class Solution 
{
    //Function to insert string into TRIE.
    insert(root, key) 
    {
       // Your code here
       let curr = root
       for(let ch of key) {
           let index = ch.charCodeAt() - 'a'.charCodeAt()
           if(curr.children[index] === null) {
               curr.children[index] = new TrieNode()
           }
           curr = curr.children[index]
       }
       curr.isEndOfWord = true
    }
    
    //Function to use TRIE data structure and search the given string.
    search(root, key) 
    {
        // Your code here
       let curr = root
       for(let ch of key) {
           let index = ch.charCodeAt() - 'a'.charCodeAt()
           if(curr.children[index] === null) {
               return false
           }
           curr = curr.children[index]
       }
       return curr.isEndOfWord
    }
}
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    
   let adjList = new Map()
   for(let word_index = 0; word_index < wordList.length; word_index++) {
       let word = wordList[word_index]
       let m = word.length
       for(let l = 0; l < m; l++) {
           let hash = word.substring(0,l) + '*' + word.substring(l+1, m)
           if(adjList.has(hash) == false) {
               adjList.set(hash, [])
           }
            adjList.get(hash).push(word_index)
       }
   }
    let visited = new Set()
    let queue = new Queue()
    queue.enqueue([beginWord, 1])
    visited.add(beginWord)
    while(queue.size() > 0) {
        let node = queue.dequeue()
        if(node[0] == endWord) {
            return node[1]
        }
        let word = node[0]
        const m = word.length
        for(let l = 0; l < m; l++) {
            let hash = word.substring(0, l) + '*' + word.substring(l+1, m)
            for(let word_index of ( adjList.get(hash) || [] )) {
                let neigh = wordList[word_index]
                if(visited.has(neigh) == false) {
                    visited.add(neigh)
                    queue.enqueue([neigh, node[1] + 1])
                }
            }
        }
    }
    return 0
};
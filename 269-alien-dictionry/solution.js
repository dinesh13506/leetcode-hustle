/**
 * @param {string[]} words
 * @return {string}
 */
 var alienOrder = function(words) {
    
    
    let indegree = new Map()
    let adjacencyList = new Map()
    
    //initialise adj list and indegree
    for(let word of words) {
        for(let ch of word) {
            indegree.set(ch,0)
            adjacencyList.set(ch,new Array())
        }
    }
    
    
    //create relations
    for(let i = 0; i <= words.length - 2; i++) {
        let word1 = words[i]
        let word2 = words[i+1]
        //console.log(word1,word2)
        if(word1.length > word2.length && word1.startsWith(word2)) {
            return ""
        }
        //find first char among two words which is diffrent
        for(let j = 0; j < Math.min(word1.length,word2.length); j++) {
            if(word1[j] != word2[j]) {
                let list = adjacencyList.get(word1[j])
                list.push(word2[j])
                adjacencyList.set(word1[j],list)
                let ind = indegree.get(word2[j])
                indegree.set(word2[j],ind+1)
                break
            }
        }
    }
    
    //console.log(indegree)
    //console.log(adjacencyList)
    
    let q = new Myqueue()
    for(let ch of indegree.keys()) {
        if(indegree.get(ch) === 0) {
            q.enq(ch)
        }
    }
    
    let count = 0
    let result = []
    while(q.size() > 0) {
        let front = q.getfront()
        result.push(front)
        q.deq()
        let neighbors = adjacencyList.get(front)
        count++
        for(let neighbor of neighbors) {
            let id = indegree.get(neighbor)
            id--
            indegree.set(neighbor,id)
            if(id ===0) {
                q.enq(neighbor)
            }
        }
    }
    
    if(count != adjacencyList.size) {
        return ""
    }
    
    return result.join("")
    
};


class Mynode {
    constructor(value) {
        this.data = value
    }
}

class Myqueue {
    constructor() {
        this.front = null
        this.rear = null
        this.length = 0
    }
    
    size() {
        return this.length
    }
    
    enq(value) {
        let node = new Mynode(value)
        if(this.length<=0) {
            this.front = node
            this.rear = node
        } else {
            this.rear.next = node
            this.rear = this.rear.next
        }
        this.length++
    }
    
    deq() {
        if(this.length<=1) {
            this.front = null
            this.rear = null
        } else{
            this.front = this.front.next
        }
        this.length--
    }
    
    getfront() {
        return this.front.data
    }
}
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    
    let dom = dominoes.split('')
    const n = dom.length
    let queue = new Queue()
    
    for(let i = 0; i < n; i++) {
        if(dom[i] != ".") {
            queue.enqueue([i, dom[i]])
        }
            
    }
    
    while(!queue.isEmpty()) {
        let [i, d] = queue.dequeue()
        if(d == "L") {
            if(i > 0 && dom[i-1] == ".") {
                dom[i-1] = "L"
                queue.enqueue([i-1,"L"])
            }
        }
        else if(d == "R") {
            if(i + 1 < n && dom[i+1] == ".") {
                if(i+2 < n && dom[i+2] == "L") {
                    queue.dequeue()
                } else {
                    dom[i+1] = "R"
                    queue.enqueue([i+1,"R"])
                }
            }
        }
    }
    return dom.join('')
};


/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    let level = 0
    let queue = new Queue()
    for(let d = 1; d <= 9; d++) {
        queue.enqueue(d + "")
    }
    level++
    while(level < n && queue.isEmpty() == false) {
        let temp = new Queue()
        while(queue.isEmpty() == false) {
            let num = queue.dequeue()
            let lastDigit = parseInt(num[num.length - 1])
            for(let d = 0; d <= 9; d++) {
                if(Math.abs(lastDigit - d) == k) {
                    temp.enqueue(num+d)
                }
            }
        }
        queue = temp
        level++
    }
    let answer = []
    while(queue.isEmpty() == false) {
        let num = parseInt(queue.dequeue())
        answer.push(num)
    }
    return answer
};
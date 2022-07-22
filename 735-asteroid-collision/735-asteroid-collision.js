/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
    let stack = []
    let n = asteroids.length
    for(let i = 0; i < n; i++) {
        if(stack.length <=0 || asteroids[i] > 0) {
            stack.push(asteroids[i])
        } else {
            while(true) {
                let peek = stack[stack.length-1]
                if(peek < 0) {
                    stack.push(asteroids[i])
                    break
                } else if(peek == -asteroids[i]) {
                    stack.pop()
                    break
                } else if(peek > -asteroids[i]) {
                    break
                } else {
                    stack.pop()
                    if(stack.length <= 0) {
                        stack.push(asteroids[i])
                        break
                    }
                }
            }
        }
    }
    return stack
};
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
    let stack = []
    let n = asteroids.length
    for(let i = 0; i < n; i++) {
        /* positive values will never do harm */
        if(stack.length <=0 || asteroids[i] > 0) {
            stack.push(asteroids[i])
        } else {
            while(true) {
                let peek = stack[stack.length-1]
                //both are in moving left direction
                if(peek < 0) {
                    stack.push(asteroids[i])
                    break
                } else if(peek == -asteroids[i]) { //peek is right and new asteroid is in left and both are same size
                    stack.pop()
                    break
                } else if(peek > -asteroids[i]) { //peek is of higher size, current asteroid will blast
                    break
                } else {
                    //peek is smaller and current is greater then peek will blast and current will blast others if they are there
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
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
    let stack = []
    stack.push(asteroids[0])
    stack.push(asteroids[1])
    for(let i = 2; i < asteroids.length + 1; i++) {
        while(stack.length >= 2) {
            let top1 = stack[stack.length-1]
            let top2 = stack[stack.length-2]
            //console.log(top1,top2)
            if((top1 < 0 && top2 > 0)) {
                if(Math.abs(top1) == Math.abs(top2)) {
                    stack.pop()
                    stack.pop()
                } else {
                    stack.pop()
                    stack.pop()
                    stack.push(Math.abs(top1) < Math.abs(top2) ? top2 : top1)
                }
            } else {
                break
            } 
        }
        if( i < asteroids.length )
            stack.push(asteroids[i])
    }
    return stack
};
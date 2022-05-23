/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    
    let m = matrix.length, n = matrix[0].length
    let heights = new Array(n)
    heights.fill(0)
    let max = 0
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] == 1) {
                heights[j]++
            } else {
                heights[j] = 0
            }
        }
        max = Math.max(max, largestRectangleArea(heights))
    }
    return max
};

var largestRectangleArea = function(heights) {
    
    let n = heights.length
    let leftsmallest = new Array(n)
    leftsmallest.fill(-1)
    let rightsmallest = new Array(n)
    rightsmallest.fill(n)
    
    let stack = []
    let top = function() {
        return stack[stack.length - 1]
    }
    for(let i = 0; i < n; i++) {
        if(stack.length == 0) {
            stack.push(i)
        } else {
            while(stack.length && heights[top()] >= heights[i]) {
                stack.pop()
            }
            leftsmallest[i] = (stack.length > 0  ? top() : -1)
            stack.push(i)
        }
    }
    
    stack = []
    for(let i = n-1; i >=0; i--) {
        if(stack.length == 0) {
            stack.push(i)
        } else {
            while(stack.length && heights[top()] >= heights[i]) {
                stack.pop()
            }
            rightsmallest[i] = stack.length > 0 ? top() : n
            stack.push(i)
        }
    }
    //console.log(leftsmallest)
    //console.log(rightsmallest)
    let max = function(a, b) {
        return Math.max(a,b)
    }
    let area = 0
    for(let i = 0; i < n; i++) {
        let leftboundary = leftsmallest[i] + 1
        let rightboundary = rightsmallest[i] - 1
        let width = rightboundary - leftboundary + 1
        area = max(area, width * heights[i])
    }
    return area
    
};
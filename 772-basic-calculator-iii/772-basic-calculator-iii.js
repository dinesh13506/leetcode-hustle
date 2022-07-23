var calculate = function(s) {
    if(s.length === 1) return parseInt(s); 
    let stack = [];
    let operand = '+';
    let number = 0;
	
    for(let i = 0; i < s.length; i++) {
        let char = s[i]
        if(!isNaN(char)) {
            number = number * 10 + parseInt(char);
        }
        
        else if(char === "(") {
            let j;
            let braces = 1
            for(j = i+1; j < s.length; j++) {
                let innerChar = s[j];
                if(innerChar === '(') braces++;
                if(innerChar === ')') braces--;
                if(braces === 0) break;
            }
            number = calculate(s.slice(i + 1, j))
            i = j;
        }
        
        if(isNaN(char) || i === s.length -1) {
            if(operand === '+') {
                stack.push(number)
            }
            else if(operand === '-') {
                stack.push(-number)
            }
            else if(operand === '*') {
                let prevNumber = stack.pop();
                stack.push(prevNumber * number)
            }
            else if(operand === '/') {
                let prevNumber = stack.pop();
                stack.push(Math.trunc(prevNumber / number))
            }
            operand = char;
            number = 0;
        }
    }
    return stack.reduce((acc, val) => acc + val)
}
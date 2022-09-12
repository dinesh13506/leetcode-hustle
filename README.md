#### Solutions to Data Structures & Algorithms coding problems, updated daily.

### Get input in Javascript
```
const readline = require("readline")
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

let name = ""
rl.question("", (str) => {
    name = str
    console.log("name = " + name)
    rl.close()
})
```

### Leetcode everyday, keeps the interview anxiety away :)

### About

1. I code everyday / goal = DSA Master.
2. I keep track of my solutions.
3. Consistency is the key.

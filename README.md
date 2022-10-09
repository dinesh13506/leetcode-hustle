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


### Java print methods of a class (trick)
```
import java.util.*;
import java.lang.reflect.Method;
class HelloWorld {
    public static void main(String[] args) {
        Method[] methods = Queue.class.getDeclaredMethods();
        for(Method method : methods) {
             System.out.println(method.toGenericString());
        }
        System.out.println();
    }
}
```

### Leetcode everyday, keeps the interview anxiety away :)

### About

1. I code everyday / goal = DSA Master.
2. I keep track of my solutions.
3. Consistency is the key.
4. Working Hard everyday.

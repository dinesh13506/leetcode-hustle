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

![image description](https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966)


### Leetcode everyday, keeps the interview anxiety away :)

### About

1. I code everyday / goal = DSA Master.
2. I keep track of my solutions.
3. Consistency is the key.
4. Working Hard everyday.

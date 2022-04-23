/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    
    let data = []
    for(let trans of transactions) {
        let arr = trans.split(",")
        data.push({
            name : arr[0],
            time: parseInt(arr[1]),
            amount: parseInt(arr[2]),
            city: arr[3]
        })
    }
    //console.log(data)
    data.sort(function(obj1,obj2) {
        if(obj1.time == obj2.time) {
            return 0
        } 
        if(obj1.time < obj2.time) {
            return -1
        }
        if(obj1.time > obj2.time) {
            return 1
        }
    })
    //console.log(data)
    let invalid = new Set()
    if(data.length <=0 ) return invalid
    for(let i = 0; i < data.length; i++) {
        let prev = data[i]
        if(prev.amount > 1000) {
            invalid.add(i)
        }
        for(let j = i + 1; j < data.length; j++) {
            let curr = data[j]
            //console.log(prev,curr)
            if(curr.amount > 1000) {
                invalid.add(j)
            }
            if(curr.time - prev.time <= 60 && curr.name == prev.name && curr.city != prev.city ) {
                    invalid.add(i)
                    invalid.add(j)
                    //console.log(i,j)
            }
        }
    }
    //console.log(invalid)
    
    let ans = []
    for(let i of invalid) {
        let d = data[i]
        ans.push(`${d.name},${d.time},${d.amount},${d.city}`)
    }
    return ans
};
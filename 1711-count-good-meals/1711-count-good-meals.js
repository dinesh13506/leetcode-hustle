/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function(deliciousness) {
    
    let map = new Map()
    const mod = 1000000007n
    let res = 0n
    for(let num of deliciousness) {
        let power = 1
        for(let i = 0; i <= 22; i++) {
            let b = power - num
            if(map.has(b)) {
                res += BigInt(map.get(b))
                res = res % mod
            }
            power = power * 2
        }
        map.set(num, (map.get(num) || 0) + 1)
    }
    return res % mod
};
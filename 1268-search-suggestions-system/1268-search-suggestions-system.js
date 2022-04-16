/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    
    products.sort(function(a,b) {return a.localeCompare(b)})
    let map = new Map()
    for(let product of products) {
        let prefix = ''
        for(let i = 0; i < product.length; i++) {
            prefix = prefix + product[i]
            let list = []
            if(map.has(prefix)) {
                list = map.get(prefix)
                list.push(product)
                map.set(prefix,list)
            } else {
                list.push(product)
                map.set(prefix,list)
            }
        }
    }
    //console.log(map)
    let ans = []
    let prefix = ''
    for(let j = 0 ; j < searchWord.length; j++) {
        prefix = prefix + searchWord[j]
        let list = map.get(prefix) || []
        let topThree = []
        for(let i = 0 ; i < Math.min(3,list.length); i++) {
            topThree.push(list[i])
        }
        ans.push(topThree)
    }
    return ans
};
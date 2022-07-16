/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceColor = function(colors, queries) {
    
    let map = new Map()
    map.set(1,[])
    map.set(2,[])
    map.set(3,[])
    
    for(let i = 0; i < colors.length; i++) {
        let colorid = colors[i]
        map.get(colorid).push(i)
    }
    
    //console.log(map)
    
    let binarysearch = (arr, target) => {
        //console.log(arr,target)
        let start = 0 , end = arr.length - 1, distance = Infinity
        while(start <= end) {
            let mid = (start) + parseInt((end - start)/2)
            //console.log(arr[mid], target)
            if(arr[mid] == target) {
                distance = 0
                break
            }
            else if(target < arr[mid]) {
                distance = Math.min(distance, arr[mid] - target)
                end = mid - 1
            } else {
                 distance = Math.min(distance, target - arr[mid])
                 start = mid + 1
            }
        }
        return distance
    }
    
    let answer = []
    for(let query of queries) {
        let [target, colorid] = query
        if(map.get(colorid).length == 0) {
            answer.push(-1)
        } else {
            let distance = binarysearch(map.get(colorid), target)
            answer.push(distance)
        }
    }
    return answer
};
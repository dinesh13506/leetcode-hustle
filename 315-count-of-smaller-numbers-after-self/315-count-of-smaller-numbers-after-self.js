/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    
    let n = nums.length
    let result = new Array(n)
    result.fill(0)
    let indices = new Array(n)
    for(let i = 0; i < n; i++) {
        indices[i] = i
    }
    
    
    let merge = (start, end, mid) => {
        let temp = []
        let i = start, j = mid 
        while(i < mid && j < end) {
            if(nums[indices[i]] <= nums[indices[j]]) {
                result[indices[i]] += (j - mid)
                temp.push(indices[i])
                i++
            } else {
                temp.push(indices[j])
                j++
            }
        }
        while(i < mid) {
            result[indices[i]] += (j - mid)
            temp.push(indices[i])
            i++
        }
        
        while(j < end) {
           temp.push(indices[j])
           j++ 
        }
        //console.log(temp)
        for(let k = start; k < end; k++) {
            indices[k] = temp[k-start]
        }
    }
    
    let mergeSort = (start, end) => {
        if(end- start <= 1) {
            return 
        }
        
        let mid = parseInt((start+end)/2)
        mergeSort(start, mid)
        mergeSort(mid, end)
        merge(start, end, mid)
    }
    
    mergeSort(0, n)
    return result
};
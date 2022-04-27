/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    
    
    let length = arr.length
    let maxfromleft = new Array(length)
    maxfromleft.fill(-Infinity)
    let maxfromright = new Array(length)
    maxfromright.fill(-Infinity)
    let count = new Map()
    
    maxfromleft[0] = arr[0]
    for(let i = 1; i < arr.length; i++) {
        maxfromleft[i] = Math.max(maxfromleft[i-1],arr[i])
    }
    maxfromright[length-1] = arr[length-1]
    for(let i = length-2; i>=0; i--) {
        maxfromright[i] = Math.max(maxfromright[i+1],arr[i])
    }
    
    //console.log(maxfromleft,maxfromright)
    for(let i = 1; i < length-1; i++) {
        if(maxfromleft[i] == maxfromright[i]) {
            return i
        }
    }
};
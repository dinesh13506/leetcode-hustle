/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort(function(a,b) {
        if(a[1] > b[1]) {
            return -1
        }
        else if(a[1] < b[1]) {
            return 1
        }
        return 0
    })
    //console.log(boxTypes)
    
    let maxunits = 0
    for(let bt of boxTypes) {
        //can take
        if(truckSize > 0) {
            let units = Math.min(bt[0], truckSize)
            maxunits += units * bt[1]
            truckSize -= units
        } else {
            break
        }
    }
    return maxunits
};
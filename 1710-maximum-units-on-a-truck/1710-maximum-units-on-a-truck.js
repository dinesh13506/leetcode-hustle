/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    
    boxTypes.sort(function(a,b) {
        return ( b[1]) - ( a[1])
    })
    //console.log(boxTypes)
    let units = 0
    for(let i = 0; i < boxTypes.length; i++ ) {
        let boxes = Math.min(truckSize,boxTypes[i][0])
        units  = units +  (boxes * boxTypes[i][1])
        truckSize = truckSize - boxes
        if(truckSize <= 0 ) break
    }
    return units
};
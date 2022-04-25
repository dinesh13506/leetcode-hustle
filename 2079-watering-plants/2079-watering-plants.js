/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    
    let i = 0, watering = capacity, steps = 0
    while( i < plants.length) {
        //console.log(watering,plants[i])
        while(watering < plants[i]) {
            steps = steps + ( i == 0 ? 2 : 2 * i )
            watering = capacity
        }
        steps++
        //console.log("steps = " + steps)
        watering = watering - plants[i]
        i++
    }
    return steps
};
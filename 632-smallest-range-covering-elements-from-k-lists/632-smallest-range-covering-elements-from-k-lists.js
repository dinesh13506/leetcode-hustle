/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    
    let merged_nums = []
    let n = nums.length
    for(let l = 0; l < n; l++) {
        let list = nums[l]
        for(let num of list) {
            merged_nums.push([num, l])
        }
    }
    merged_nums.sort((a,b) => 
        {
            return a[0] - b[0]
        }
    )
    //console.log(merged_nums)
    
    let map = new Map()
    let total = 0
    let i = 0
    let start = -Infinity, end = Infinity
    
    for(let j = 0; j < merged_nums.length; j++) {
        map.set(merged_nums[j][1], (map.get(merged_nums[j][1]) || 0) + 1)
        if(map.get(merged_nums[j][1]) == 1) {
           total++
        } 
        if(total == n) {
            //console.log(map, start, end,total,n)
            if( (merged_nums[j][0] - merged_nums[i][0]) < end - start) {
                start = merged_nums[i][0]
                end = merged_nums[j][0]
            }
            else if( (merged_nums[j][0] - merged_nums[i][0]) == (end - start) && merged_nums[i][0] < start) {
                start = merged_nums[i][0]
                end = merged_nums[j][0]
            }
        }
        if(total == n) {
            while(total == n) {
                if(map.get(merged_nums[i][1]) > 1) {
                    map.set(merged_nums[i][1], map.get(merged_nums[i][1]) - 1)
                    i++
                } else {
                    break
                }
            }
            if( (merged_nums[j][0] - merged_nums[i][0] ) < end - start) {
                    start = merged_nums[i][0]
                    end = merged_nums[j][0]
            }
            else if( (merged_nums[j][0] - merged_nums[i][0] == end - start ) && merged_nums[i][0] < start) {
                start = merged_nums[i][0]
                end = merged_nums[j][0]
            }
        }
    }
    return [start, end]
};
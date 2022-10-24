/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function(nums) {
    
    let merge = (start, mid, end) => {
        let temp = [];
        let p1 = start, p2 = mid  + 1;
        while(p1 <= mid && p2 <= end) {
            if(nums[p1] < nums[p2]) {
                temp.push(nums[p1]);
                p1++;
            } else {
                temp.push(nums[p2]);
                p2++;
            }
        }
        while(p1 <= mid) {
             temp.push(nums[p1]);
             p1++;
        }
        
        while(p2 <= end) {
            temp.push(nums[p2]);
            p2++;
        }
        
        let k = 0;
        for(let i = start; i <= end; i++) {
            nums[i] = temp[k];
            k++;
        }
        
    }
     
    let mergesort = (start, end) => {
        if(start < end) {
            let mid = (start + end) / 2;
            mid = parseInt(mid);
            mergesort(start, mid);
            mergesort(mid + 1, end);
            merge(start, mid,  end);
        }
    }
    const n = nums.length;
    mergesort(0, n-1);
    return nums;
};
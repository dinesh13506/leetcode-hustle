/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead
 */

var merge = function(nums1, m, nums2, n) {
    let temp1 = [], temp2 = [], i = 0, j = 0;
    
    
    let extra = n;
    
    while(extra){
        nums1.pop()
        extra--;
    }
    
    while(nums1.length){
        temp1.push(nums1.pop());  
    }
    
    temp1.reverse();    
    while(nums2.length){
        temp2.push(nums2.pop());     
    }
    
    temp2.reverse(); 
    while(i < temp1.length && j < temp2.length){
        if(temp1[i] <= temp2[j]){
            nums1.push(temp1[i])
            i++;
        }
        else{
            nums1.push(temp2[j])
            j++;
        }
    }
    
    while(i < temp1.length){
        nums1.push(temp1[i])
        i++;
    }
    
    while(j < temp2.length){
        nums1.push(temp2[j])
        j++;
    }
};
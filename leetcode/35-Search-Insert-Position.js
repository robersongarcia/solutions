/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let mid = (nums.length-1) / 2;

    while(nums[mid]!==target || ((nums[mid]!==0)&&(((nums[mid]!==nums.length-1))))){
        
        if(target<=nums[mid]){
            mid = mid/2;
        }else{
            mid = ((nums.length - mid)/2)+mid;
        }

    }

    
};
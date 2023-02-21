/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let k = 1;
    let num = nums[0]

    for(let i = 1; i < nums.length; i++){

        if(num < nums[i]){
            k++;
            num = nums[i];
            nums[k] = num;
        }

    }

    return k;
    
};

removeDuplicates([1,1,2]);
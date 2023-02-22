/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    let k = 0;
    let i = 0;
    let j = 0;

    while(j<nums.length){

        if(nums[i]===val){
            
            for (let f = i; f < nums.length; f++) {
                
                nums[f] = nums[f+1];
                
            }
            
        }else{
            i++;
            k++;
        }

        j++;
        
    }
    console.log({nums,k});
    
    return k;
};


removeElement([0,1,2,2,3,0,4,2], 2);


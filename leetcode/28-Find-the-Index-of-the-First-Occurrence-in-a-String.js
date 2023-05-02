/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    for(let i=0; i<haystack.length; i++){

        if(haystack[i] === needle[0]){
            let flag = true;
            let flag2 = false;
            for(let j=0; j<needle.length && j+i < haystack.length; j++){
                if(haystack[i+j]!==needle[j])
                    flag = false;
                
                if(j===needle.length-1 && flag)
                    flag2 = true;
            }

            if(flag2)
                return i;
        }

    }

    return -1;
};

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

const result1 = strStr("sadbutsad","sad");
console.log(result1);

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
const result2 = strStr("leetcode","leeto");
console.log(result2);
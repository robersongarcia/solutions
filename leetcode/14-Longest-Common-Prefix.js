/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let out = "";
    let aux = "";

    for (let i = 0; i < strs.length; i++) {
        aux="";

        if(i===0){
            out = strs[i];
            continue;
        }

        for (let j = 0; j < strs[i].length; j++) {
            
            if(out[j]===strs[i][j]){
                aux+=out[j];
                continue;
            }
            else{
                out = out.slice(0,j)
                if(out.length===0)
                    return "";
                break;
            }
        }

        if(aux.length < out.length)
            out = aux;
        
    }
    return out;
};

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
console.log(`example 1: ${longestCommonPrefix(["flower","flow","flight"])}`);


// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
console.log(`example 2: ${longestCommonPrefix( ["dog","racecar","car"])}`)

console.log(`example 3: ${longestCommonPrefix(["ab", "a"])}`);
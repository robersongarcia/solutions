// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


//My solution O(n) implementation, brute force
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const romanSymbols = [ 'I', 'V', 'X', 'L', 'C', 'D' , 'M'];
    const romanValues = [1,5,10,50,100,500,1000];
    let Int = 0;


    for (let i = 0; i < s.length; i++) {
        
        // I logic
        if(s[i] === romanSymbols[0]){
            if( (i+1 < s.length) && (s[i+1] === romanSymbols[1] || s[i+1] === romanSymbols[2]))
                Int -= romanValues[0];
            else
                Int +=romanValues[0];   
        }

        if(s[i] === romanSymbols[1])
            Int += romanValues[1];

        //X logic
        if(s[i] === romanSymbols[2]){
            if( (i+1 < s.length) && (s[i+1] === romanSymbols[3] || s[i+1] === romanSymbols[4]))
                Int -= romanValues[2];
            else
                Int += romanValues[2];   
        }

        //C logic
        if(s[i] === romanSymbols[4]){
            if( (i+1 < s.length) && (s[i+1] === romanSymbols[5] || s[i+1] === romanSymbols[6]))
                Int -=  romanValues[4];
            else
                Int += romanValues[4];   
        }

        
        if(s[i] === romanSymbols[3])
            Int += romanValues[3];

        
        if(s[i] === romanSymbols[5])
            Int += romanValues[5];

        
        if(s[i] === romanSymbols[6])
            Int += romanValues[6];

    }

    return Int;

};
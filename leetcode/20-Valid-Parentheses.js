/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let brackets = [0,0,0];  //0 <- (), 1 <- {}, 2 <- []   
    const opens = ['(','{','['];
    const close = [')', '}', ']'];
    let last = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const openPos = opens.indexOf(char);
        const closePos = close.indexOf(char);

        if((openPos!=-1)){
            brackets[openPos]++;
            last.push(openPos);
        }

        if((closePos!=-1)){
            brackets[closePos]--;
            const pop = last.pop();

            if(closePos != pop)
                return false;
        }

        if(brackets[0]<0 || brackets[1]<0 || brackets[2]<0)
            return false;
    }

    if(brackets[0]==0 && brackets[1]==0 && brackets[2]==0)
        return true;
    else
        return false;

};


// Example 1:

// Input: s = "()"
// Output: true

console.log(`Example 1: ${isValid("()")}`);

// Example 2:

// Input: s = "()[]{}"
// Output: true

console.log(`Example 2: ${isValid("()[]{}")}`);

// Example 3:

// Input: s = "(]"
// Output: false

console.log(`Example 3: ${isValid("(]")}`);


console.log(`Example 4: ${isValid("([)]")}`);


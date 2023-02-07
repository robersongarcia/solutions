/*Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j]. */

//examples
// Example 1:

// Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
// Output: 1
// Example 2:

// Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
// Output: 3

//Brute force solution  O(n¨2) time complexity
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let count = 0;

    for(let i = 0; i < dominoes.length; i++){

        for(let j=i+1; j < dominoes.length; j++){
            if( ((dominoes[i][0] === dominoes[j][0]) && ((dominoes[i][1] === dominoes[j][1]))) || ((dominoes[i][0] === dominoes[j][1]) && ((dominoes[i][1] === dominoes[j][0]))) )
                count++;
        }
    }

    return count;
};

//Tests

const result1 = numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]]);
console.log(`Result 1: ${result1}`);

const result2 = numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]]);
console.log(`Result 2: ${result2}`);

//Hash-map aproach solution has O(n)
var numEquivDominoPairs2 = function(dominoes) {
    let count = 0;
    let hashMap = new Map();
    
    for (let i = 0; i < dominoes.length; i++) {
        const key = dominoes[i].toString();
        const reverse_key = dominoes[i].reverse().toString();
        
        let keyValue = (hashMap.get(key) || 0);
        count +=  (hashMap.has(reverse_key) && key !== reverse_key ? hashMap.get(reverse_key) : 0) + keyValue;

        if(!hashMap.has(key))
            hashMap.set(key,1);
        else
            hashMap.set(key, hashMap.get(key) + 1);
    }

    return count;
}

const result3 = numEquivDominoPairs2([[1,2],[2,1],[3,4],[5,6]]);
console.log(`Result 3: ${result3}`);

const result4 = numEquivDominoPairs2([[1,2],[1,2],[1,1],[1,2],[2,2]]);
console.log(`Result 4: ${result4}`);
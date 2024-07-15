/* 
    Given a string, partition such that every substring of the partition is a palindrome
    Return the minimum cuts needed for a palindrome partitioning of string.

    Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
*/

const test = require('node:test');
const assert = require('assert');

const run = (input) => {
    let index = 0;
    let count = 0;
    for(let i in input){
        const str = input.substring(index, parseInt(i)+1);
        if(str != str.split('').reverse().toString().replaceAll(',','')){
            count +=1;
            index = i;

        }
    }
    return count;
}

test('Example 1: Input: s = "aab" Output: 1', (t) => {
    const input = "aab";
    const expected = 1;
    const result = run(input);
    assert.strictEqual(result, expected);
});

test('Example 2: Input: s = "a" Output: 0', (t) => {
    const input = "a";
    const expected = 0;
    const result = run(input);
    assert.strictEqual(result, expected);
});

test('Example 3: Input: s = "ab" Output: 1', (t) => {
    const input = "ab";
    const expected = 1;
    const result = run(input);
    assert.strictEqual(result, expected);
});

// additional
test('Example 3: Input: s = "aaabbccc" Output: 2', (t) => {
    const input = "ab";
    const expected = 1;
    const result = run(input);
    assert.strictEqual(result, expected);
});

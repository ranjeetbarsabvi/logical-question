const test = require('node:test');
const assert = require('assert');


const myAtoi = (s) => {
    let str = s[0] === " " ? s.substring(1) : s;
    let sign = ""; 
    if(str[0] === "+" || str[0] === "-"){
        sign = str[0]==="-" ? "-":"";
        str = str.substring(1);
    }  
    let finalStr = "";
    for(const ss of str.split("")){
        if(parseInt(ss) >= 0)
            finalStr += ss;
        else
            break;
    }
    return !finalStr ? 0 : parseInt(sign+finalStr);
}

test('Example 1: Input: s = "42" Output: 42', () => {
    const input = "42";
    const expected = 42;
    const result = myAtoi(input);
    assert.strictEqual(result, expected);
});

test('Example 2: Input: s = " -042" Output: -42', (t) => {
    const input = " -042";
    const expected = -42;
    const result = myAtoi(input);
    assert.strictEqual(result, expected);
});

test('Example 3: Input: s = "1337c0d3" Output: 1337', (t) => {
    const input = "1337c0d3";
    const expected = 1337;
    const result = myAtoi(input);
    assert.strictEqual(result, expected);
});

test('Example 4: Input: s = "0-1" Output: 0', (t) => {
    const input = "0-1";
    const expected = 0;
    const result = myAtoi(input);
    assert.strictEqual(result, expected);
});

test('Example 5: Input: s = "words and 987" Output: 0', (t) => {
    const input = "words and 987";
    const expected = 0;
    const result = myAtoi(input);
    assert.strictEqual(result, expected);
});

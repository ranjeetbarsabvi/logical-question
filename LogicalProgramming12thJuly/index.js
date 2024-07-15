const test = require('node:test');
const assert = require('assert');

const run = (s) => {
    let input = s;
    let out = '';
    do{
        for(let i=0; i<input.length; i++){
            if(i===0) out= '';
            let count = 0;
            if(parseInt(input[i])){
                count = parseInt(input[i]);
                let start = '';
                let end = '';
                let word = '';
                for(let j=i; j<input.length; j++){
                    if(input[j] === '[') start += '[';
                    if(i===j) continue;
                    if(input[j] === ']') end += ']';
                    if(start && (start.length === end.length))
                    {
                        out += Array(count).fill(word.substring(1)).toString().replaceAll(',','');
                        i=j;
                        break;
                    }
                    else
                        word += input[j];
                } 
            }
            else 
                out += input[i];
            
        }
        input = out;
    }while(out.includes('['));
    return out;
}

test('Example 1: Input: s = "3[a]2[bc]" Output: "aaabcbc"', (t) => {
    const input = "3[a]2[bc]";
    const expected = "aaabcbc";
    const result = run(input);
    assert.strictEqual(result, expected);
});

test('Example 2: Input: s = "3[a2[c]]" Output: "accaccacc"', (t) => {
    const input = "3[a2[c]]";
    const expected = "accaccacc";
    const result = run(input);
    assert.strictEqual(result, expected);
});

test('Example 3: Input: s = "2[abc]3[cd]ef" Output: "abcabccdcdcdef"', (t) => {
    const input = "2[abc]3[cd]ef";
    const expected = "abcabccdcdcdef";
    const result = run(input);
    assert.strictEqual(result, expected);
});

// additional
test('Example 3: Input: s = "2[a2[b2[c]]]" Output: "abccbccabccbcc"', (t) => {
    const input = "2[a2[b2[c]]]";
    const expected = "abccbccabccbcc";
    const result = run(input);
    assert.strictEqual(result, expected);
});

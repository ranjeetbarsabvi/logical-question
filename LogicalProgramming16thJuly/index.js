const test = require('node:test');
const assert = require('assert');

const run = (dp) => {
    // first transaction
    let max = 0;
    let buy=0;
    let sell=0;
    for(let i=0; i<dp.length; i++){
        for(let j=i; j<dp.length; j++){
            if(j==i) continue;
            if(dp[j]-dp[i] > max){ 
                max = dp[j]-dp[i];
                buy = i;
                sell = j;
            }  
        }
    }

    // second transaction
    let max2 = 0;
    let buy2 = 0;
    let sell2 = 0;
    for(let i=0; i<dp.length; i++){
        for(let j=i; j<dp.length; j++){
            if(j==i) continue;
            if((i>=buy && i<=sell) || (j>=buy && j<=sell)) { 
                continue;
            }
            if(dp[j]-dp[i] > max2){ 
                max2 = dp[j]-dp[i];
                buy2 = i;
                sell2 = j;
            }  
        }
    }
    return (max+max2);
}

test('Example 1: Input: prices = [3,3,5,0,0,3,1,4] Output: 6', () => {
    const input = [3,3,5,0,0,3,1,4];
    const expected = 6;
    const result = run(input);
    assert.strictEqual(result, expected);
});

test('Example 2: Input: prices = [1,2,3,4,5] Output: 4', (t) => {
    const input = [1,2,3,4,5];
    const expected = 4;
    const result = run(input);
    assert.strictEqual(result, expected);
});

test('Example 3: Input: prices = [7,6,4,3,1] Output: 0', (t) => {
    const input = [7,6,4,3,1];
    const expected = 0;
    const result = run(input);
    assert.strictEqual(result, expected);
});

// additional
test('Example 4: Input: prices = [0,0,1,9,3,6,9,0,0] Output: 15', (t) => {
    const input = [0,0,1,9,3,6,9,0,0];
    const expected = 15;
    const result = run(input);
    assert.strictEqual(result, expected);
});

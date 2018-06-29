'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

function cutFirst(str)
{
    let max = str.length;
    let result = "";
    for(var i=0; i<max; i++)
        if(i > 1)
            result = result + str[i];
    return result;
}

function cutLast(str)
{
    let max = str.length;
    let result = "";
    for(var i=0; i<max; i++)
        if(i < max - 2)
            result = result + str[i];
    return result;
}

function cutFirstLast(str)
{
    let max = str.length;
    let result = "";
    for(var i=0; i<max; i++)
        if((i > 1)&& (i < max - 2))
            result = result + str[i];
    return result;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst('testlong'), 'stlong');
assert.strictEqual(cutFirst('te'), '');
assert.strictEqual(cutLast('testlong'), 'testlo');
assert.strictEqual(cutLast('te'), '');
assert.strictEqual(cutFirstLast('testlong'), 'stlo');
assert.strictEqual(cutFirstLast('test'), '');
// End of tests */
'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

function keepFirst(str)
{
    return str.substring(0, 2);
}

function keepLast(str)
{
    return str.substring(str.length-2)
}

function keepFirstLast(str)
{
    return str.substring(2, 4)
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, "function");
assert.strictEqual(typeof keepLast, "function");
assert.strictEqual(typeof keepFirstLast, "function");
assert.strictEqual(keepFirst('str'), 'st');
assert.strictEqual(keepLast('qsdqsdqsd'), 'sd');
assert.strictEqual(keepFirstLast('STRing'), 'Ri');
assert.strictEqual(keepFirstLast('zapZAP'), 'pZ');
// End of tests */
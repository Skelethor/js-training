'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str)
{
    let tab = str.split(" ");
    let chaine = "";
    let max = tab.length;
    for(let i=0; i<max; i++)
        if(i===max-1)
            chaine += mettreMaj(tab[i]);
        else
            chaine += mettreMaj(tab[i])+" ";
    return chaine;
}

function mettreMaj(str)
{
    return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('pouet pouet pouet'), 'Pouet Pouet Pouet')
assert.strictEqual(jadenCase('pouet poueT pouet'), 'Pouet Pouet Pouet')
// End of tests */

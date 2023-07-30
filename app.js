'use strict';

/*
    8kyu. Reduce but Grow

Given a non-empty array of integers, return the result of multiplying the values together in order. 
Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

const b = [1, 2, 3, 4];

function grow(x) {
    return x.reduce((acc, el) => acc * el);
}

console.log(grow(b));
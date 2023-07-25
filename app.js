'use strict';

/*
    8kyu. Opposite number

Very simple, given an integer or a floating-point number, find its opposite.
Examples:
1: -1
14: -14
-34: 34
*/

function opposite(number) {
    if (number > 0) {
        return -Math.abs(number);
    } else if (number < 0) {
        return Math.abs(number);
    } else if (number === 0) {
        return 0;
    }
}
console.log(opposite(-22)); // 22
console.log(opposite(144)); // -144
console.log(0); // 0

// or return(-number); or return number * (-1);
